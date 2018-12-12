<template>
  <div class="page-container">
    <div class="pageson-banner">
      <img src="/static/image/index/banner.png" alt="">
    </div>
    <div class="pageson-main">
      <div class="pageson-title">
        <div>{{title}}</div>
        <p>{{msg}}</p>
      </div>
      <div class="pageson-menu flex-row">
        <div>
          <div class="nav-title">编码追溯中心业务流程</div>
          <ul class="menu-nav">
            <li v-for="item in menuNavList" :key="item.name"
                @click="clickNav(item)">
              <router-link :to="item.link"
                           :class="item.active ? 'active':''">
                {{item.name}}
              </router-link>
            </li>
          </ul>
          <div class="nav-title" style="margin-top: 20px;">中国物品编码中心业务流程</div>
          <ul class="menu-nav">
            <li v-for="item in menuNavList2" :key="item.name"
                @click="clickNav(item)">
              <router-link :to="item.link"
                           :class="item.active ? 'active':''">
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted (){
      this.initNav();
    },
    watch:{
      $route: {
        handler: function(){
          this.initNav();
        }
      }
    },
    data (){
      return{
        title: '业务流程',
        msg: 'Bussiness Process',
        menuNavList:[
          {
            name: '未申请商品条码和全球位置码(GLN)',
            link: 'noApplication',
            active: true,
          },
          {
            name: '已申请商品条码和全球位置码(GLN)',
            link: 'application',
            active: false,
          },
          {
            name: '办理中心管理代码流程',
            link: 'handle',
            active: false,
          },
          {
            name: '配件基础信息备案流程',
            link: 'partsBase',
            active: false,
          },
          {
            name: '配件赋码流程',
            link: 'parts',
            active: false,
          },
          {
            name: '配件大数据备案流程',
            msg: 'Center profile',
            link: 'partsData',
            active: false,
          },
        ],
        menuNavList2:[
          {
            name: '办理商品条码流程',
            link: 'product',
            active: false,
          },
          {
            name: '办理全球位置码(GLN)流程',
            link: 'gln',
            active: false,
          },
        ],
      }
    },
    methods:{
      initNav (){
        let path = this.$route.path.split("/")[2];
        this.menuNavList.forEach( item =>{
          item.active = false;
          if(item.link === path){
            item.active = true;
          }
        });
        this.menuNavList2.forEach( item =>{
          item.active = false;
          if(item.link === path){
            item.active = true;
          }
        })
      },
      clickNav (item){
        this.menuNavList.forEach( value =>{
          if(value.active){
            value.active = false;
          }
        });
        this.menuNavList2.forEach( value =>{
          if(value.active){
            value.active = false;
          }
        });
        item.active = true;
      },
    }
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
    width: 80%;
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
  .pageson-menu .nav-title{
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    padding: 20px 0;
  }
  .menu-nav,.menu-content{
    flex: auto;
  }
  .menu-nav{
    padding-left: 10px;
  }
  .menu-nav li a{
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    padding: 20px 0;
    text-align: left;
    color: #999;
    border-bottom: 2px solid #E5ECF2;
  }
  .menu-nav li a.active{
    color: #193F90;
    border-bottom: 2px solid #193F90;
  }
  .menu-content{
    width: 70%;
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
