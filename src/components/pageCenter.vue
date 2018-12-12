<template>
  <div style="position: relative;">
    <div class="common-header">
      <page-header></page-header>
    </div>
    <div class="common-content">
      <router-view></router-view>
    </div>
    <div class="code-wrap">
      <div class="entry">
        <img src="../assets/image/index/code-entry.png" alt="">
        <div class="code">
          <img src="../assets/image/index/code.png" alt="">
          <div>扫二维码 关注我们</div>
        </div>
      </div>
    </div>
    <a class="toTop" href="javascript:;" @click="onTop">
      <img src="../assets/image/top.png" alt="">
    </a>
    <div class="common-footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import pageHeader from '../components/pageHeader'
  import pageFooter from '../components/pageFooter'
	export default {
	  components:{
      pageHeader,
      pageFooter
    },
    watch: {
      $route: {
        handler: function(value){
          this.currentPath = value;
        }
      }
    },
    mounted (){
	    this.onTop();
    },
    computed:{
      key() {
        return this.$route.name !== undefined ? this.$route.name +new Date(): this.$route +new Date()
      }
    },
    data (){
	    return{
	      currentPath: ""
      }
    },
    methods:{
      onTop (){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
	}
</script>

<style scoped>
   .code-wrap{
     position: fixed;
     right: 4px;
     bottom: 60px;
  }
   .entry {
     padding: 5px;
     background-color: rgba(0, 0, 0, 0.2);
  }
   .entry>img{
     opacity: 0.75;
     filter: alpha(opacity=50);
   }
   .code{
     display: none;
     position: absolute;
     right: 40px;
     top: -40px;
     width: 120px;
     padding: 10px 10px;
     background: url("../assets/image/index/code-background.png") no-repeat center;
     background-size: contain;
  }
   .code img{
     display: block;
     width: 88%;
  }
   .code div{
    width: 88%;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
   .entry:hover .code{
    display: block;
  }
   .toTop{
     position: fixed;
     right: 4px;
     bottom: 10px;
     width: 40px;
     height: 40px;
     background-color: rgba(0,0,0,.2);
     opacity:0.5;
     filter:alpha(opacity=50);
   }
   .toTop img{
     display: block;
     width: 60%;
     margin: 8px auto;
   }
</style>
