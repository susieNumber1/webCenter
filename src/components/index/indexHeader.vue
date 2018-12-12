<template>
  <div class="header-container">
    <div class="header-bar clearfix">
      <img class="header-logo" src="../../assets/image/logo.png" />
      <div class="header-search ">
        <span class="search-input flex-row" v-if="searchFlag">
          <input type="text" v-model.trim="searchKey">
          <a href="javascript:;" class="close" @click="searchKey=''">&times;</a>
        </span>
        <a href="javascript:;" class="search-btn" @click="onSearch">
          <img src="../../assets/image/search.png" alt="">
        </a>
      </div>
    </div>
    <ul class="header-nav">
      <li v-for="(nav,index) in headerNav" :class="index === headerNav.length-1 ? 'last':''">
        <router-link :to="nav.link">{{nav.name}}</router-link>
        <ul v-if="nav.list">
          <li v-for="item in nav.list">
            <router-link :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      currentRouter: {
        default: "/index",
        type: String
      },
    },
    data (){
      return{
        searchKey: "",
        searchFlag: false,
        navIndex: 0,
        headerNav:[
          {
            name: "首页",
            link: "/index",
          },
          {
            name: "中心概况",
            link: "/center/info",
            list:[
              {
                name: '中心简介',
                link: '/center/info',
              },
              {
                name: '中心职能',
                link: '/center/functions',
              },
              {
                name: '组织架构',
                link: '/center/organization',
              },
              {
                name: '指导机构',
                link: '/center/guidance',
              },
              {
                name: '联系我们',
                msg: 'Connect Us',
                link: '/center/connect'
              },
            ]
          },
          {
            name: "新闻动态",
            link: "/news"
          },
          {
            name: "技术标准",
            link: "/standard/law",
            list:[
              {
                name: '政策法规',
                link: '/standard/law',
              },{
                name: '标准文献',
                link: '/standard/literature',
              },{
                name: '技术知识',
                link: '/standard/knowledge',
              },
            ]
          },
          {
            name: "应用推广",
            link: "/promotion"
          },
          {
            name: "追溯平台",
            link: "/centerInfo",
            list:[
              {
                name: '平台登录',
                link: '/standard/law',
              },
              {
                name: '业务流程',
                link: '/bussiness/noApplication',
              },
              {
                name: '追溯查询',
                link: '/standard/law',
              },
            ]
          },
          {
            name: "培训活动",
            link: "/activity/course",
            list:[
              {
                name: '课程培训',
                link: '/activity/course',
              },
              {
                name: '大型活动',
                link: '/activity/acts',
              },
              {
                name: '我的报名',
                link: '/signList',
              },
            ]
          },
        ]
      }
    },
    methods: {
      onSearch (){
        if(this.searchFlag && this.searchKey){
          this.getSearchList();
        }else{
          this.searchFlag = !this.searchFlag;
        }
      },
      getSearchList (){
        console.log(this.searchKey);
      },
    }
  }
</script>
<style scoped>
  .header-container{
    width: 100%;
  }
  .header-bar{
    width: 100%;
    padding:0 10px;
    box-sizing: border-box;
  }
  .header-bar .header-logo{
    padding-top: 10px;
  }
  .header-search{
    float: right;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
  }
  .header-search .search-input{
    width: 110px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    margin-right: 8px;
  }
  .header-search .search-input input{
    width: 80px;
    height: 20px;
    margin-left: 2px;
    margin-right: 8px;
    background-color: transparent;
    line-height: 20px;
    color: #fff;
  }
  .header-search .search-input .close{
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  .header-search .search-btn{
    height: 22px;
  }
  .header-nav{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    line-height: 40px;
    margin-right: 30px;
  }
  .header-nav>li{
    position: relative;
  }
  .header-nav>li>a{
    display: block;
    color: #fff;
    padding: 4px 20px;
    border-top: 4px solid transparent;
  }
  .header-nav>li:hover{
    background-color: #fff;
  }
  .header-nav>li:hover>a{
    color: #1C1F8A;
    border-top: 4px solid #193F90;
  }
  .header-nav>li:hover ul{
    display: block;
  }
  .header-nav>li:hover ul a{
    display: block;
    /*color: #fff;*/
  }
  .header-nav>li ul{
    position: absolute;
    top: 50px;
    left: 0;
    display: none;
    background-color: #fff;
    z-index: 10;
  }
  .header-nav>li ul li{
    width: 170px;
    padding: 4px 20px;
    box-sizing: border-box;
  }
  .header-nav>li ul li:hover{
    background-color: #E7E8EC;
  }
  .header-nav>li.last ul{
    position: absolute;
    top: 50px;
    right: 0;
    left: auto;
    z-index: 10;
  }
  .header-nav>li.last ul li{
    width: 170px;
  }
</style>
