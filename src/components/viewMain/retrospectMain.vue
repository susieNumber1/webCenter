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
          <ul class="menu-nav">
            <li v-for="item in menuNavList" :key="item.name"
                @click="clickNav(item)">
              <router-link :to="item.link"
                           :class="item.active ? 'active':''">
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 右侧 -->
        <div class="menu-content">
           <div class="inputBox"><span><img src="../../assets/image/retrospect/Magnifier.png"alt=""></span><input type="text" placeholder="请输入溯源码" v-model="retrospectData"><span><img @click="clearInput" class="close" src="../../assets/image/retrospect/close.png" alt=""></span></div>
           <div><router-view></router-view></div>
        </div>
        
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
        title: '追溯平台',
        msg: 'Traceability platform',
        retrospectData:"",
        menuNavList:[
          {
            name: '何为追溯',
            link: 'what',
            active: true,
          },
          {
            name: '平台价值',
            link: 'price',
            active: false,
          },
          {
            name: '平台优势',
            link: 'advantage',
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
      clearInput (){
        this.retrospectData = "";
      }
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
  .menu-nav{
    width:150px;
    text-align: center;
  }
 
  .menu-nav,.menu-content{
    flex: auto;
  }
  .menu-nav{
    padding-left: 10px;
     list-style-type:none;
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
    text-align: center;
  }
  .menu-nav li a.active{
    color: #193F90;
    border-bottom: 2px solid #193F90;
  }
  .menu-content{
  
    font-size: 16px;
    line-height: 24px;
  
    padding: 0 80px;
    box-sizing: border-box;
    letter-spacing: 2px;
  }
  .menu-content p{
    text-indent: 36px;
  }

  .inputBox{
    width:80%;
    height:40px;
    border:1px solid #2e3492;
    border-radius: 20px;
   
  }
  .inputBox span{
    display: inline-block;
    width:60px;
    height:40px;
  }
  .inputBox span img{
    vertical-align: middle;
    width:20px;
    height:20px;
    margin: 10px 20px;
  }
    .inputBox input{
      width:76%;
      border:none;
      height:30px;
      margin-top:5px;
      border-left:1px solid #ddd;
      padding-left: 30px;
    }
    .inputBox img.close{
      cursor: pointer;
    }

</style>
