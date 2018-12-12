<template>
  <div class="menu-content">
    <div class="content-list">
      <ul class="flex-row">
        <li v-for="item in newsList" class="content-item">
          <router-link :to="'/detailActs/'+item.unitId">
            <div class="item-wrap">
              <div class="img-wrap">
                <img :src="pubJson.imgConfig.imgUrlOld + item.src" alt="">
              </div>
              <div class="intro ellipsis-multi" v-html="item.newsTitle"></div>
              <div class="place ellipsis">
                <img src="../../assets/image/place.png" alt="">
                <span>{{item.place}}</span>
              </div>
              <div class="timer">
                <img src="../../assets/image/index/timer.png" alt="">
                <span>{{item.lastUpdatedTime.split(' ')[0]}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
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
</template>

<script>
  export default {
    name: "acts",
    created (){
      this.getNewsList();
    },
    data (){
      return{
        newsList: [],
        pageNum: 1,
        pageSize: 6,
        totalPage: 0,
      }
    },
    methods: {
      getNewsList (){
        this.axios.post("/qfycode-web-pages/activity/activitySearch.do",{
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },{
          showLoading: true
        })
        .then(res =>{
          if(res.result){
            let resultData = res.data.newsVoList;
            resultData.forEach( item =>{
              item.newsArtifactsList.forEach(v =>{
                if(v.artifactOrder == 1){
                  item.src = v.artifactPath;
                }
              });
              item.newsUnitAttributes.forEach( v=>{
                if(v.attrName === "trainPlace"){
                  item.place = v.attrContent;
                }
              })
            });
            this.newsList = resultData;
            this.totalPage = Math.ceil(res.data.total/this.pageSize);
          }
        })
        .catch(error=>{})
      },
      paginateHandler (pageNum){
        this.pageNum = pageNum;
        this.getNewsList();
      }
    },
  }
</script>

<style scoped>
  .menu-content{
    width: 77%;
    padding: 0;
    margin-left: 10px;
  }
  .content-list{
    padding-bottom: 1px;
    color: #444;
  }
  .content-list ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
  }
  .content-item{
    border: 1px solid transparent;
    border-radius: 8px;
    margin-bottom: 50px;
  }
  .content-item .item-wrap{
    width: 280px;
    border: 1px solid #E7E8EC;
    border-radius: 8px;
    box-shadow: 0 6px 20px #999;
  }
  .content-item .intro{
    height: 36px;
    font-size: 14px;
    line-height: 18px;
    padding: 0 10px;
    margin: 10px 0;
    font-weight: bold;
  }
  .content-item .place,.content-item .timer{
    color: #193F90;
    padding: 4px 10px;
  }
  .content-item .timer img,.content-item .place img{
    float: left;
    width: 12px;
    margin-right: 8px;
  }
  .content-item .img-wrap{
    width: 100%;
    height: 150px;
    overflow: hidden;
  }
  .content-item .img-wrap>img{
    display: block;
    width: 100%;
  }
</style>
