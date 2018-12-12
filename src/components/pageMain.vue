<template>
  <div class="page-container">
    <div class="pageson-banner">
      <slot name="banner"></slot>
    </div>
    <div class="pageson-main">
      <div class="pageson-title">
        <slot name="title"></slot>
      </div>
      <div class="pageson-menu flex-row">
        <slot name="menu"></slot>
      </div>
    </div>
    <div class="slide-bar">

    </div>
  </div>
</template>

<script>
	export default {
		name: "pageMain",

	}
</script>

<style scoped>
  .pageson-banner img{
    display: block;
    width: 100%;
  }
  .pageson-main{
    position: relative;
    top: -40px;
    left: 0;
    width: 88%;
    margin: 0 auto;
  }
  .pageson-title{
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    color: #193F90;
    padding: 40px 0 40px 50px;
    border: 1px solid #E5ECF2;
    background-color: #fff;
    box-sizing: border-box;
  }
  .pageson-title>p{
    font-size: 16px;
  }
  .pageson-menu{
    width: 100%;
    align-items: flex-start;
    padding: 50px 0 100px;
  }
  .menu-nav,.menu-content{
    flex: auto;
  }
  .menu-nav li a{
    display: block;
    width: 130px;
    font-size: 16px;
    line-height: 20px;
    padding: 20px 0;
    text-align: center;
    border-bottom: 2px solid #E5ECF2;
  }
  .menu-nav li a.active{
    color: #193F90;
    border-bottom: 2px solid #193F90;
  }
  .menu-content{
    font-size: 16px;
    line-height: 24px;
    margin-left: 50px;
    padding: 0 80px;
    box-sizing: border-box;
    letter-spacing: 2px;
  }
  .menu-content p{
    text-indent: 36px;
  }
</style>
