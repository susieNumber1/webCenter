<template>
    <div class="page-container">
      <img src="../assets/image/404.png" alt="">
      <div class="form-btn">
        <router-link to="/index">返回首页</router-link>
      </div>
    </div>
</template>

<script>
	export default {
		name: "notFound"
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
  .page-container>img{
    display: block;
    width: 50%;
    margin: 50px auto;
  }
  .form-btn{
    display: block;
    width: 240px;
    font-size: 14px;
    padding: 16px 0;
    text-align: center;
    background-color: #193F90;
    cursor: pointer;
    margin: 30px auto 50px;
  }
  .form-btn a{
    color: #fff;
  }
</style>
