<template>
  <div class="nav-wrap">
    <ul class="content-nav flex-row">
      <li v-for="item in contentNav" :class="item.active ? 'active':''" @click="clickContentNav(item)">

        <div v-if="item.active" style="height: 55px;">
          <img :src="item.iconActive" alt="">
        </div>
        <div v-if="!item.active" style="height: 55px;">
          <img :src="item.icon" alt="">
        </div>
        <div class="content-nav-text">{{item.name}}</div>
      </li>
    </ul>
    <div class="content-list">
      <ul>
        <li v-for="item in newsList" class="content-item">
          <router-link :to="detail+item.unitId">
            <div class="item-wrap">
              <img :src="pubJson.imgConfig.imgUrl + item.src" alt="">
              <div class="intro ellipsis-multi" v-html="item.newsTitle"></div>
              <div class="timer">
                <img src="../../assets/image/index/timer.png" alt="">
                <span>{{item.lastUpdatedTime}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="more">
        <router-link :to="moreLink">MORE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "indexNav",
    mounted (){
		  this.clickContentNav(this.contentNav[0]);
    },
    data (){
		  return{
        contentNav: [
          {
            name: "热门新闻",
            key: "XWZX",
            active: true,
            icon: "/static/image/index/news.png",
            iconActive: "/static/image/index/news-active.png",
            link: "/news",
            detail: "/detailNews/"
          },
          {
            name: "政策法规",
            key: "ZZFG",
            active: false,
            icon: "/static/image/index/law.png",
            iconActive: "/static/image/index/law-active.png",
            link: "/standard/law",
            detail: "/detailLaws/"
          },
          {
            name: "中心培训",
            key: "PX",
            active: false,
            icon: "/static/image/index/train.png",
            iconActive: "/static/image/index/train-active.png",
            link: "/activity/course",
            detail: "/detailCourse/"
          },
          {
            name: "最新活动",
            key: "ZXHD",
            active: false,
            icon: "/static/image/index/activity.png",
            iconActive: "/static/image/index/activity-active.png",
            link: "/activity/acts",
            detail: "/detailActs/"
          },
        ],
        newsList:[],
        moreLink: "",
        detail: "",
      }
    },
    methods: {
      clickContentNav (item){
        this.contentNav.forEach( i =>{
          i.active = false;
        });
        item.active = true;
        this.moreLink = item.link;
        this.detail = item.detail;
        this.getContentList(item.key);
      },
      getContentList (key){
        if(key === "ZXHD"){
          this.getActivitiesList(key);
        }else{
          this.axios.post("/qfycode-web-pages/news/selectNewsListByTypeId.do",{
            typeId: key,
            pageNum: 1,
            pageSize: 3,
          })
          .then( res =>{
            if(res.result){
              let resultData = res.data.newsList;
              resultData.forEach(item =>{
                item.newsArtifactsList.forEach(v =>{
                  if(v.artifactOrder == 1){
                    item.src = v.artifactPath;
                  }
                });
              });
              this.newsList = resultData;
            }
          })
          .catch( err =>{})
        }
      },
      getActivitiesList (){
        this.axios.post("/qfycode-web-pages/activity/activitySearch.do",{
          pageNum: 1
        })
          .then( res =>{
            if(res.result){
              let resultData;
              if(res.data.total > 3){
                resultData = res.data.newsVoList.splice(0,3);
              }else{
                resultData = res.data.newsVoList;
              }
              resultData.forEach(item =>{
                item.newsArtifactsList.forEach(v =>{
                  if(v.artifactOrder == 1){
                    item.src = v.artifactPath;
                  }
                });
              });
              this.newsList = resultData;
            }
          })
          .catch( err =>{})
      }
    }
	}
</script>

<style scoped>
  .nav-wrap{
    width: 74%;
    margin: 0 auto;
  }
  .content-nav{
    margin-top: 20px;
  }
  .content-nav li{
    width: 25%;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 4px solid #E7E8EC;
    cursor: pointer;
  }
  .content-nav li.active{
    color: #1C1F8A;
    border-bottom: 4px solid #193F90;
  }
  .content-nav img{
    height: 100%;
  }
  .content-nav-text{
    font-size: 16px;
    line-height: 18px;
    padding: 10px 0;
    margin-top: 10px;
  }
  .content-item .intro{
    height: 36px;
    font-size: 14px;
    line-height: 18px;
    padding: 0 10px;
    margin: 10px 0;
    font-weight: bold;
  }
  .content-item .timer{
    color: #193F90;
    padding: 10px 10px;
  }
  .content-item .timer img{
    float: left;
    width: 12px;
    margin-right: 8px;
  }
  .content-item.active{
    /*box-shadow: ;*/
  }
  .content-item .item-wrap>img{
    display: block;
    width: 100%;
  }
  .nav-wrap .content-list ul{
    align-items: flex-start;
  }
</style>
