<template>
  <div class="header-container">
    <div class="header-bar flex-row">
      <img class="header-logo" src="../assets/image/logo-page.png" />
      <ul class="header-nav">
        <li v-for="(nav,index) in headerNav" :class="index === headerNav.length-1 ? 'last':''">
          <router-link :to="nav.link">{{nav.name}}</router-link>
          <ul v-if="nav.list">
            <li v-for="item in nav.list">
            <a @click="goplatform" v-show="item.name=='平台登录'">平台登录</a>
            <router-link v-show="item.name!='平台登录'" :to="item.link">{{item.name}}</router-link>              
            </li>
          </ul>
        </li>
      </ul>
      <div class="header-search ">
        <span class="search-input">
          <input type="text">
          <a href="javascript:;" class="close">&times;</a>
        </span>
        <a href="javascript:;" class="search-btn">
          <img src="../assets/image/search-page.png" alt="">
        </a>
      </div>
    </div>
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
                msg: 'Center profile',
                link: '/center/info',
              },
              {
                name: '中心职能',
                msg: 'Center profile',
                link: '/center/functions',
              },
              {
                name: '组织架构',
                msg: 'Organizational Structure',
                link: '/center/organization',
              },
              {
                name: '指导机构',
                msg: 'Center profile',
                link: '/center/guidance',
              },
              {
                name: '联系我们',
                msg: 'Connect Us',
                link: '/center/connect',
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
                msg: 'Laws and Regulations',
                link: '/standard/law',
              },{
                name: '标准文献',
                msg: 'Standard literature',
                link: '/standard/literature',
              },{
                name: '技术知识',
                msg: 'Technology knowledge',
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
            link: "/bussiness/noApplication",
            list:[
              {
                name: '平台登录',
                msg: 'Laws and Regulations',
                link: '/standard/law',
              },
              {
                name: '业务流程',
                msg: 'Bussiness Process',
                link: '/bussiness/noApplication',
              },
              {
                name: '追溯查询',
                msg: 'Laws and Regulations',
                link: '/retrospect/what',
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
    methods:{
      goplatform(){
        window.location.target="_ablank";
        window.location.href ='http://www.caqp-id.com/#/login';
      }
    }
	}
</script>

<style scoped>
  .header-container{
    width: 100%;
  }
  .header-bar{
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
    justify-content: space-between;
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
    margin-right: 30px;
    color: #666;
  }
  .header-search .search-input{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 20px;
    border: 1px solid #E5ECF2;
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
    color: #999;
  }
  .header-search .search-input .close{
    color: #999;
    font-size: 20px;
    text-decoration: none;
  }
  .header-search .search-btn img{
    width: 20px;
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
    cursor: pointer;
  }
  .header-nav>li>a{
    display: block;
    color: #000;
    padding: 4px 20px;
    border-top: 4px solid transparent;
  }
  .header-nav>li:hover{
    background-color: #fff;
  }
  .header-nav>li:hover>a{
    color: #fff;
    background-color: #193F90;
    border-top: 4px solid transparent;
  }
  .header-nav>li:hover ul{
    display: block;
    background-color: #193F90;
  }
  .header-nav>li:hover ul a{
    display: block;
    font-size: 14px;
    color: #fff;
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
    background-color: #13316F;
  }
</style>
