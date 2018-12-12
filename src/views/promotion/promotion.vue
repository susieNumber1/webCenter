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
        <div class="pageson-menu">
          <div class="menu-content">
            <ul>
                <li  v-for="item in newsList">
                    <router-link :to="'/detailPromotion/'+item.unitId" class="promotion-item">
                      <div class="promotion-img">
                        <img :src="pubJson.imgConfig.imgUrlPro + item.src"   alt="">
                      </div>
              
                        <div class="promotion-title">
                          <a>{{item.newsTitle}}</a>
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
import _mm from '../../assets/js/mm.js';
import _promotion from '../../request/promotion-request.js'
 
  export default {
    name: "promotion",
    mounted (){
      this.getNewsList();
    },
    data (){
      return {
        title: "应用推广",
        msg: "Application promotion",
        newsList: [],
        totalPage: 0,
        pageNum: 1,
        pageSize: 9
      }
    },
    computed:{
    },
    methods: {
      //获取企业推广列表
      getNewsList (){
        let params = {
          typeId: "JDAL",
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
        _promotion.getPromotionList(params).then(res=>{
            console.log(res);
            let resultData = res.newsList;
              resultData.forEach( item =>{
                item.newsArtifactsList.forEach(v =>{
                  if(v.artifactOrder == 1){
                    item.src = v.artifactPath;
                  }
                });
              });
              this.newsList = resultData;
              this.totalPage = Math.ceil(res.total/this.pageSize);
        }).catch(errMsg=>{
            console.log(errMsg)
        })
      },
      paginateHandler (pageNum){
        this.pageNum = pageNum;
        this.getNewsList();
      }
    }
  }
</script>

<style scoped>
@import "../../assets/css/promotion-video-common.css";
</style>
