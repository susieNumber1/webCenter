<template>
  <div class="page-container">
    <div class="form-wrap">
      <div class="form-title">注册</div>
      <div class="form-container">
        <div class="item-wrap">
          <div class="input-item">
            <input type="text" placeholder="请输入用户名"
                   v-model.trim="params.username" @blur="validateUsername"/>
          </div>
          <div class="form-error">{{validation.usernameMsg}}</div>
        </div>
        <div class="item-wrap">
          <div class="input-item">
            <input type="text" placeholder="请输入手机号" maxlength="11"
                   v-model.trim="params.mobile"
                   @blur="validateMobile"/>
          </div>
          <div class="form-error">{{validation.mobileMsg}}</div>
        </div>
        <div class="item-wrap">
          <div class="input-item input-item-code flex-row">
            <input type="text" placeholder="请输入短信验证码"
                   v-model.trim="params.code"
                   @keyup.enter="onSubmit"/>
            <div class="item-btn" @click="getCode">{{codeObj.codeMsg}}</div>
          </div>
          <div class="form-error">{{validation.codeMsg}}</div>
        </div>
        <div class="input-item">
          <input type="password"  placeholder="请输入密码"
                 v-model.trim="params.password"/>
        </div>
        <div class="item-wrap">
          <div class="input-item">
            <input type="password"  placeholder="请再次输入密码"
                   v-model.trim="passwordConfirm" @blur="validatePassword"/>
          </div>
          <div class="form-error">{{this.validation.passwordMsg}}</div>
        </div>
      </div>
      <div class="form-other" style="padding-left: 30px;margin-top: 0;">
        <input type="checkbox" v-model="validation.readChecked">
        <span>我已阅读并同意
          <a href="#" class="other-link">《用户协议》</a>
          和
          <a href="#" class="other-link">《隐私声明》</a>
        </span>
      </div>
      <div class="form-error" style="height: 14px;margin-top: 50px;text-align: center;">{{validation.errorMsg}}</div>
      <div class="form-btn" style="margin-top: 0;" @click="onSubmit">注册</div>
      <div class="form-other" style="text-align: center">
        <router-link to="/login" >已有账号，立即登录</router-link>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
		name: "register",
    data (){
		  return{
        params:{
          username: "",
          mobile: "",
          code: "",
          password: "",
        },
        passwordConfirm: "",
        codeObj:{
          timeSpan: 60,
          codeMsg: "获取验证码",
        },
        error: false,
        validation:{
          usernameMsg: "",
          mobileMsg: "",
          codeMsg: "",
          passwordMsg: "",
          readChecked: true,
          errorMsg: "",
        }
      }
    },
    methods:{
      onSubmit (){
        let validation = this.validation;
        if(this.params.username && this.params.mobile && this.params.password){
          if(validation.usernameMsg || validation.mobileMsg || validation.codeMsg || validation.passwordMsg || !validation.readChecked){
            this.validation.errorMsg = "请填写正确的注册信息";
          }else{
            this.validation.errorMsg = "";
            this.onRegister();
          }
        }else{
          this.validation.errorMsg = "请填写正确的注册信息";
        }
      },
      onRegister (){
        this.axios.post("/qfycode-web-pages/user/register.do",{
          ...this.params
        })
          .then( res =>{
            if(res.result){
              this.$router.push("/registerResult");
            }
          })
          .catch(e);
      },
      validateUsername (){
        if(this.params.username){
          this.axios.post("/qfycode-web-pages/user/checkUnique.do",{
            username: this.params.username
          })
          .then( res =>{
            if(!res.result){
              this.validation.usernameMsg = "用户名已存在";
            }else{
              this.validation.usernameMsg = "";
            }
          })
          .catch( err =>{});
        }else{
          this.validation.usernameMsg = "请输入用户名";
        }
      },
      validateMobile (){
        let validationMobile = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.params.mobile);
        if(!this.params.mobile){
          this.validation.mobileMsg = "请输入手机号";
          return false;
        }
        if(!validationMobile){
          this.validation.mobileMsg = "手机号格式错误";
          return false;
        }
        this.axios.post("/qfycode-web-pages/user/checkUnique.do",{
          mobile: this.params.mobile
        })
        .then( res =>{
          if(res.result){
            this.validation.mobileMsg = "";
          }else{
            this.validation.mobileMsg = "手机号已被注册";
          }
        })
        .catch( err =>{})
      },
      getCode (){
        if(this.validation.mobileMsg){
          this.validation.codeMsg = "请先输入正确的手机号，然后获取短信验证码。"
        }else{
          this.validation.codeMsg = "";
          this.axios.post("/qfycode-web-pages/user/getCode.do",{
            mobile: this.params.mobile,
          })
          .then( res =>{
            if(res.result){
              this.validation.codeMsg = "";
              this.setTimer();
            }else{
              this.validation.codeMsg = "验证码发送失败，请重试。"
            }
          })
          .catch( error =>{});
        }

      },
      setTimer (){
        let timeSpan = this.codeObj.timeSpan;
        let timer = setInterval( () =>{
          if(timeSpan > 0){
            timeSpan --;
            this.codeObj.codeMsg = timeSpan + "秒后重新发送";
          }else{
            clearInterval(timer);
            timeSpan = 60;
            this.codeObj.codeMsg = "获取验证码";
          }
        },1000);
      },
      validatePassword (){
        if(this.params.password !== this.passwordConfirm){
          this.validation.passwordMsg = "两次密码输入不一致";
        }else{
          this.validation.passwordMsg = "";
        }
      },
    }
	}
</script>

<style scoped>
  .page-container:before{
    content: "";
    display: table;
    width: 100%;
    height: 40px;
    background-color: #193F90;
  }
  .form-wrap{
    width: 400px;
    margin: 60px auto;
    font-size: 16px;
  }
  .form-title{
    font-size: 18px;
    line-height: 20px;
    color: #666;
    padding-bottom: 30px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid #E5ECF2;
  }
  .form-container{
    margin-top: 50px;
  }
  .input-item{
    height: 40px;
    border: 1px solid #C3C3C3;
    border-radius: 2px;
    margin-bottom: 30px;
  }
  .input-item input{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #666;
    text-indent: 20px;
  }
  .input-item-code{
    justify-content: space-between;
  }
  .input-item-code input{
    width: 60%;
  }
  .input-item .item-btn{
    padding: 8px 20px;
    background-color: #193F90;
    margin-right: 10px;
    font-size: 14px;
    color: #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  .form-btn{
    color: #fff;
    padding: 16px 0;
    margin-top: 50px;
    text-align: center;
    background-color: #193F90;
    border-radius: 4px;
    cursor: pointer;
  }
  .form-other{
    font-size: 14px;
    justify-content: space-between;
    margin-top: 30px;
  }
  .form-other a{
    font-size: 14px;
    line-height: 18px;
    color: #999;
  }
  .form-other .other-link{
    color: #193F90;
  }
  .item-wrap{
    margin-bottom: 20px;
  }
  .item-wrap .input-item{
    margin: 0;
  }
  .item-wrap .form-error{
    height: 14px;
    text-align: right;
    margin: 5px 0;
  }
  .form-error{
    color: red;
    font-size: 14px;
    margin: 0 0 20px;
  }
</style>
