<template>
  <div class="page-container">
    <div class="form-wrap">
      <div class="form-title">
        <img src="../../assets/image/login/success.png" alt="">
      </div>
      <div class="form-msg flex-column">
        <div class="msg-title">密码重置成功</div>
        <div class="msg-info">请妥善保管您的账号信息</div>
      </div>
      <router-link to="/login" class="form-btn">登录</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "passwordReset"
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
  .form-msg{
    margin-top: 50px;
  }
  .form-msg .msg-title{
    font-size: 22px;
    color: #666;
    font-weight: bold;
  }
  .form-msg .msg-info{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    margin: 50px 0 0;
  }
  .form-btn{
    display: block;
    color: #fff;
    padding: 16px 0;
    margin-top: 50px;
    text-align: center;
    background-color: #193F90;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
