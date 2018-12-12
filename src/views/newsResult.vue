<template>
  <div class="page-main">
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
          <div class="menu-content">
            <ul>
              <li v-for="item in newsList">
                <router-link :to="'/detailNews/'+item.unitId" class="news-item flex-row">
                  <div>
                    <img :src="pubJson.imgConfig.imgUrl + item.src" alt="">
                  </div>
                  <div style="flex: auto;margin-left: 30px;">
                    <div class="title">
                      <span v-html="item.newsTitle"></span>
                      <span class="timer">{{item.createTime}}</span>
                    </div>
                    <div class="content">{{item.attrContent}}</div>
                  </div>
                </router-link>
              </li>
            </ul>
            <paginate v-if="totalPage > 0"
                      style="margin-top: 50px;"
                      v-model="pageNum"
                      :pageCount="totalPage"
                      :clickHandler="paginateHandler"
                      :prevText="'上一页'"
                      :nextText="'下一页'"
                      :containerClass="'content-page flex-row'"
                      :page-class="'page-item'">
            </paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsList",
    props:{
      searchParam: String,
    },
    mounted (){
      this.getNewsList();
    },
    data (){
      return {
        title: "新闻动态",
        msg: "News",
        newsList: [],
        totalPage: 0,
        pageNum: 1,
        pageSize: 10,
      }
    },
    methods: {
      getNewsList (){
        this.axios.post("/news/searchNewsByTitleFromEs.do",{
          searchParam: this.searchParam,
          pageNum: this.pageNum,
          newsTypeId: "XWZX",
        })
        .then( res =>{
          if(res.result){
            let resultData = res.data.newsList;
            resultData.forEach( item =>{
              item.newsArtifactsList.forEach(v =>{
                if(v.artifactOrder == 1){
                  item.src = v.artifactPath;
                }
              });
              item.newsUnitAttributes.forEach( v =>{
                if (v.attrName == "orderby") {
                  item.attrContent = v.attrContent;
                }
              });
            });
            this.newsList = resultData;
            this.totalPage = Math.ceil(res.data.total/this.pageSize);
          }
        })
        .catch( err =>{})
      },
      paginateHandler (pageNum){
        this.pageNum = pageNum;
        this.getNewsList();
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
  .pageson-title .flex-row{
    font-size: 20px;
    color: #666;
  }
  .pageson-title .search-input{

  }
  .menu-content{
    padding: 0 50px 0 70px;
  }
  .menu-content li{
    padding: 10px 0;
    border-bottom: 1px solid #E5ECF2;
  }
  .menu-content li img{
    display: block;
    width: 100px;
    height: 50px;
  }
  .menu-content li a{
    font-size: 16px;
    line-height: 20px;
    color: #3d3d3d;
  }
  .menu-content li .timer{
    float: right;
  }
  .menu-content li .content{
    line-height: 18px;
    margin-top: 10px;
  }
  .menu-content li .timer,.menu-content li .content{
    font-size: 14px;
    color: #999;
  }
  .news-item{
    justify-content: flex-start;
  }
</style>
