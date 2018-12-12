<template>
  <div class="page-main">
    <div class="index-header">
      <div class="header-wrap">
        <slot name="index-header"></slot>
      </div>
      <slot name="index-banner"></slot>
    </div>
    <div class="index-content">
      <div class="code-wrap">
        <div class="entry">
          <img src="../../assets/image/index/code-entry.png" alt="">
          <div class="code">
            <img src="../../assets/image/index/code.png" alt="">
            <div>扫二维码 关注我们</div>
          </div>
        </div>
      </div>
      <slot name="index-nav"></slot>
      <div class="case-wrap">
        <div class="content-case">
          <slot name="index-video"></slot>
          <slot name="index-cases"></slot>
        </div>
      </div>
    </div>
    <a class="toTop" href="javascript:;" @click="onTop">
      <img src="../../assets/image/top.png" alt="">
    </a>
    <slot name="index-partner"></slot>
    <div class="index-footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import pageFooter from '@/components/pageFooter'
	export default {
		name: "indexFrame",
    components:{
		  pageFooter
    },
    methods:{
      onTop (){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
	}
</script>

<style scoped>
  .page-main{
    position: relative;
  }
  .index-header{
    position: relative;
  }
  .header-wrap{
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  .index-content{
    position: relative;
  }
  .content-case{
    width: 74%;
    margin: 0 auto;
  }
  /* 扫码关注 */
  .index-content .code-wrap{
    position: absolute;
    right: 4px;
    top: 65px;
  }
  .index-content .entry {
    padding: 5px;
    background-color: #DFE3EF;
  }
  .index-content .code{
    display: none;
    position: absolute;
    right: 40px;
    top: -40px;
    width: 120px;
    padding: 10px 10px;
    background: url("../../assets/image/index/code-background.png") no-repeat center;
    background-size: contain;
  }
  .index-content .code img{
    display: block;
    width: 88%;
  }
  .index-content .code div{
    width: 88%;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  .index-content .entry:hover .code{
    display: block;
  }
  .case-wrap{
    background: url("../../assets/image/index/earth.png") no-repeat center;
    background-size: cover;
  }
  .toTop{
    position: absolute;
    right: 4px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    background-color: #DFE3EF;
  }
  .toTop img{
    display: block;
    width: 60%;
    margin: 8px auto;
  }
</style>
