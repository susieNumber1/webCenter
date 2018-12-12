<template>
  <div class="page-container">
    <div class="form-wrap">
      <div class="form-title">登录</div>
      <div class="form-container">
        <div class="input-item">
          <input type="text" placeholder="请输入手机号" maxlength="11"
                 v-model.trim="mobile"
                 @keyup.enter="onSubmit"/>
        </div>
        <div class="input-item">
          <input type="password"  placeholder="请输入密码"
                 v-model.trim="password"
                 @keyup.enter="onSubmit"/>
        </div>
      </div>
      <div class="input-item input-item-code flex-row" v-show="captchaFlag">
        <input type="text" placeholder="请输入验证码"
               v-model.trim="captcha"/>
        <img class="item-img" :src="captchaSrc" @click="getCaptcha"/>
      </div>
      <div class="form-error" style="height: 14px;margin-top: 50px;text-align: center;">{{errorMsg}}</div>
      <div class="form-btn" @click="onSubmit">登录</div>
      <div class="form-other flex-row">
        <router-link to="/resetPassword">忘记密码</router-link>
        <router-link to="/register">新用户注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "login",
    data (){
		  return {
        mobile: "",
        password: "",

        captcha: "",

        captchaSrc: "",
        captchaFlag: false,

        errorMsg: "",
      }
    },
    mounted (){
      let token = this.$cookies.get("_token");
      if(token){
        this._token = token;
        this.$router.push("/loginOut");
      }
    },
    methods:{
      getCaptcha (){
        this.captchaSrc = "/qfycode-web-pages/complaint/captcha.do";
      },
      onSubmit (){
        if(this.mobile && this.password){
          if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.mobile)){
            this.errorMsg = "";
            if(this.captchaFlag){
              this.captchaValidation();
            }else{
              this.login();
            }
          }else{
            this.errorMsg = "手机号格式错误";
          }
        }else{
          this.errorMsg = "请填写正确的登录信息";
        }
      },
      captchaValidation (){
        this.axios.post("/qfycode-web-pages/complaint/validateCheckCode.do",{
          captcha: this.captcha
        })
        .then( res =>{
          if(res.result){
            this.login();
          }else{
            this.errorMsg = "验证码错误";
          }
        })
        .catch(e)
      },
      login (){
        this.axios.post("/qfycode-web-pages/user/login.do",{
          mobile: this.mobile,
          password: this.password
        })
        .then (res =>{
          if(res.result){
            this.errorMsg = "";
            this.$cookies.set("_token",res.data.token);
            this.$cookies.set("userName",res.data.username);
            this.$router.push("/signList");
          }else{
            this.errorMsg = "登录失败，请输入验证码后重新登录";
            this.captchaFlag = true;
            this.getCaptcha();
            this.$cookies.remove("_token");
            this.$cookies.remove("userName");
          }
        })
        .catch(e =>{})
      }
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
  .input-item-code img{
    display: block;
    height: 90%;
  }
  .form-btn{
    color: #fff;
    padding: 16px 0;
    text-align: center;
    background-color: #193F90;
    border-radius: 4px;
    cursor: pointer;
  }
  .form-other{
    justify-content: space-between;
    margin-top: 30px;
  }
  .form-other a{
    font-size: 14px;
    line-height: 18px;
    color: #999;
  }
  .form-error{
    color: red;
    font-size: 14px;
    margin: 0 0 20px;
  }
</style>
