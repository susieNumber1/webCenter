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
        <ul class="menu-nav">
          <li v-for="item in menuNavList" :key="item.name"
              @click="clickNav(item)">
            <router-link :to="item.link"
                         :class="item.active ? 'active':''">
              {{item.name}}
            </router-link>
          </li>
        </ul>
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
        title: '培训活动',
        msg: 'Training activities',
        menuNavList:[
          {
            name: '课程培训',
            link: '/activity/course',
            active: true,
          },
          {
            name: '大型活动',
            link: '/activity/acts',
            active: false,
          },
        ],
      }
    },
    methods:{initNav (){
        let path = this.$route.path;
        this.menuNavList.forEach( item =>{
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
  .menu-nav,.menu-content{
    flex: auto;
  }
  .menu-nav li a{
    display: block;
    width: 100%;
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
