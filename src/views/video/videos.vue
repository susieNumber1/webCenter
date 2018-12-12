<template>
  <div class="page-main">
    <div class="page-container">
      <div class="pageson-banner">
        <img src="../../assets/image/banner/videos.png" alt="">
      </div>
      <div class="pageson-main">
        <div class="pageson-title">
          <div>{{title}}</div>
          <p>{{msg}}</p>
        </div>
        <div class="pageson-menu">
          <div class="menu-content">
            <ul  class="promotionUl">
                <li v-for="item in videoList">
                  <div  class="video-img">
                    <img :src="pubJson.videoConfig.videoUrl + item.picSrc" alt="">
                    <a @click="toPlay(item.picSrc,item.newsContent)"><img src="../../assets/image/playIcon.png" alt=""></a>
                  </div>

                    <div>
                      <a>{{item.newsTitle}}</a>
                    </div>
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
    <video-component v-show="videoShadow" @toplay='toPlay' :videoPic='videoPic' :videoPath='videoPath'></video-component>
  </div>
</template>

<script>
import videoComponent from '../../components/utils/video.vue';
  export default {
    name: "vadio",
    mounted (){
      this.getVideoList();
    },
    data (){
      return {
        title: "推荐视频",
        msg: "Recommend Video",
        videoList: [],
        totalPage: 0,
        pageNum: 1,
        pageSize: 9,
        videoShadow:false,
        videoPic:'',
        videoPath:'',
      }
    },
    methods: {
      getVideoList (){
        this.axios.post("/qfycode-web-pages/news/selectNewsListByTypeId.do",{
          typeId: "TJSP",
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },{
          showLoading: true,
        })
          .then( res =>{
            if(res.result){
              let resultData = res.data.newsList;
              resultData.forEach( item =>{
                item.newsArtifactsList.forEach(v =>{
                  if(v.artifactOrder == 1){
                    // item.picSrc = 'F:/data/image/96951ae26e27e9f363765a854f27152b.png';
                    // item.newsContent = 'F:/data/video/96951ae26e27e9f363765a854f27152b.mp4';
                    item.picSrc = v.artifactPath;
                  }
                });
              });
              this.videoList = resultData;
              this.totalPage = Math.ceil(res.data.total/this.pageSize);
            }
          })
          .catch( err =>{})
      },
      paginateHandler (pageNum){
        this.pageNum = pageNum;
        this.getVideoList();
      },
      toPlay(picSrc,newsContent){
        this.videoPic  = this.pubJson.videoConfig.videoUrl + picSrc;
        this.videoPath = this.pubJson.videoConfig.videoUrl + newsContent;
      	// this.videoShadow = !this.videoShadow;
      }
    },
    components:{
    	videoComponent,
    }
  }
</script>

<style scoped>
@import "../../assets/css/promotion-video-common.css";
.pageson-banner{
  overflow: hidden;
}
.video-img{
	position: relative;
}
.video-img a{
	position: absolute;
	top:50%;
	left:50%;
	margin:-25px;
	display: block;
	width:50px;
	height:50px;
	border-radius: 50%;
}
.video-img a img{
	width:50px;
	height:50px;
  cursor: pointer;
}
</style>
