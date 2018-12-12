a<template>
    <div class="footer-container">
      <div class="footer-main flex-row">
        <div class="left">
          <div>
            <span><router-link to="/center/info">关于我们</router-link></span>
            <span>|</span>
            <span><router-link to="/fDetail/0">用户协议</router-link></span>
            <span>|</span>
            <span><router-link to="/fDetail/1">隐私声明</router-link></span>
            <span>|</span>
            <span><router-link to="/fDetail/2">法律声明</router-link></span>
            <span>|</span>
            <span><router-link to="/center/connect">联系我们</router-link></span>
          </div>
          <div class="intro">Copyright &copy; 中国质量万里行促进会汽车零部件编码与质量追溯中心 京ICP备16041172</div>
        </div>
        <div class="right flex-row">
          <div class="flex-column">
            <img src="../assets/image/index/wechat.png" alt="">
            <div>公众号</div>
          </div>
          <div style="font-size: 20px;margin: 0 10px;">|</div>
          <div class="contact">
            <div>010-59775001</div>
            <div>周一至周五 9:00-18:00</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "pageFooter"
	}
</script>

<style scoped>
  .footer-container{
    width: 100%;
    padding: 50px 0;
    background-color: #333;
    color: #999999;
  }
  .footer-main{
    width: 88%;
    margin: 0 auto;
    justify-content: space-between;
  }
  .footer-main .left span{
    padding-right: 2px;
  }
  .footer-main .left span a{
    color: #999999;
  }
  .footer-main .left .intro{
    margin-top: 10px;
    color: #666;
  }
  .footer-main .right img{
    width: 27px;
    margin-bottom: 6px;
  }
  .footer-main .contact div{
    height: 14px;
    line-height: 20px;
    padding-left: 20px;
    background: url("../assets/image/index/call.png") no-repeat left center;
    background-size: contain;
  }
  .footer-main .contact div:last-child{
    margin-top: 12px;
  }
</style>
