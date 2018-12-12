<template>
  <div class="page-container">
    <div class="form-wrap">
      <div class="form-title">重置密码</div>
      <div class="form-container">
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
                   v-model.trim="codeObj.code"/>
            <div class="item-btn" @click="getCode">{{codeObj.codeMsg}}</div>
          </div>
          <div class="form-error">{{validation.codeMsg}}</div>
        </div>
        <div class="input-item">
          <input type="password"  placeholder="请输入新密码"
                 v-model.trim="params.password" @blur="validatePassword"/>
        </div>
        <div class="item-wrap">
          <div class="input-item">
            <input type="password"  placeholder="请再次确定新密码"
                   v-model.trim="passwordConfirm" @blur="validatePassword"/>
          </div>
          <div class="form-error">{{validation.passwordMsg}}</div>
        </div>
      </div>
      <div class="form-error" style="height: 14px;margin-top: 50px;text-align: center;">{{errorMsg}}</div>
      <div class="form-btn" style="margin-top: 0;" @click="onSubmit">确定</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "resetPassword",
    data (){
      return{
        params:{
          mobile: "",
          password: "",
        },
        codeObj:{
          code: "",
          timeSpan: 60,
          codeMsg: "获取验证码",
        },
        validation:{
          mobileMsg: "",
          passwordMsg: "",
          codeMsg: "",
        },
        passwordConfirm: "",
        errorMsg: "",
      }
    },
    methods:{
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
        this.validation.mobileMsg = "";
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
      getCode (){
        if(this.validation.mobileMsg){
          this.validation.codeMsg = "请先输入正确的手机号，然后获取短信验证码。"
        }else{
          this.validation.codeMsg = "";
          if(this.codeObj.codeMsg === "获取验证码"){
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
        }
      },
      validatePassword (){
        if(this.params.password !== this.passwordConfirm){
          this.validation.passwordMsg = "两次密码输入不一致";
        }else{
          this.validation.passwordMsg = "";
        }
      },
      onSubmit (){
        if(this.params.mobile && this.params.password && this.passwordConfirm && this.codeObj.code){
          if(this.params.password !== this.passwordConfirm){
            this.errorMsg = "两次密码输入不一致";
            return false;
          }
          this.axios.post("/qfycode-web-pages/user/forgetPassword.do",{
            mobile: this.params.mobile,
            code: this.codeObj.code,
          })
            .then( res =>{
              if(res.result){
                this.resetPassword();
              }else{
                this.errorMsg = res.message;
              }
            })
            .catch(e);
        }else{
          this.errorMsg = "请输入完整的信息";
        }
      },
      resetPassword (){
        this.axios.post("/qfycode-web-pages/user/reSetPassword.do",{
          mobile: this.params.mobile,
          rePassword: this.params.password
        })
          .then( res =>{
            if(res.result){
              this.$router.push("/passwordSuccess");
            }else{
              this.errorMsg = res.message;
            }
          })
          .catch(e);
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
