<template>
  <div class="page-container">
    <div class="pageson-banner">
      <img src="../../assets/image/banner/activity.png" alt="">
    </div>
    <div class="detail-main">
      <div class="detail-title">
        <router-link to="/activity/course" class="title-page">培训活动 ·</router-link>
        <router-link to="/activity/acts" class="title-page">大型活动 ·</router-link>
        <span class="title-page">活动详情</span>
      </div>
      <div class="detail-content flex-row">
        <div class="content-common">
          <div class="content-title">{{title}}</div>
          <div class="content-main">
            <div class="content-info flex-row">
              <img class="info-img" :src="pubJson.imgConfig.imgUrl + content.src" alt="">
              <div class="info-main">
                <div class="info-item flex-row">
                  <img src="../../assets/image/sponsor.png" alt="">
                  <div class="flex-row">
                    <span>主办方：</span>
                    <span>{{content.leader}}</span>
                  </div>
                </div>
                <div class="info-item flex-row">
                  <img src="../../assets/image/connects.png" alt="">
                  <div class="flex-row">
                    <span>联系人：</span>
                    <span>{{content.contacts}}</span>
                  </div>
                </div>
                <div class="info-item flex-row">
                  <img src="../../assets/image/timer.png" alt="">
                  <div class="flex-row">
                    <span>活动时间：</span>
                    <span>{{content.trainTime}}</span>
                  </div>
                </div>
                <div class="info-item flex-row">
                  <img src="../../assets/image/place2.png" alt="">
                  <span>{{content.trainPlace}}</span>
                </div>
                <div class="info-item sign-btn">
                  <router-link :to="'/signUp/' + content.unitId" style="width: 80%;">我要报名</router-link>
                </div>
              </div>
            </div>
            <div class="content-data" v-html="content.newsContent"></div>
          </div>
          <div class="share-bar flex-row">
            <span>分享到：</span>
            <ul class="flex-row">
              <li>
                <a href="javascript:;" @click="shareToQQ($event)">
                  <img src="../../assets/image/share/qq.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;" @click="shareToQzone($event)">
                  <img src="../../assets/image/share/qzone.png" alt=""></a>
              </li>
              <li>
                <a href="javascript:;" @mouseenter="showCode = true" @mouseleave="showCode=false">
                  <img src="../../assets/image/share/wechat.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;" @click="shareToWeibo($event)">
                  <img src="../../assets/image/share/weibo.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;" @click="copyUrl">
                  <img src="../../assets/image/share/copy.png" alt="">
                  <textarea id="pageUrl" style="opacity: 0;width: 0;margin: 0;">{{this.pageUrl}}</textarea>
                </a>
              </li>
            </ul>
            <div class="page-code" v-if="showCode">
              <div class="code-wrap">
                <img :src="qrcode" alt="">
              </div>
              <h4>微信扫一扫</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailActs",
    props:{
      unitId: String | Number
    },
    data (){
      return {
        pageUrl: "",
        title: "",
        content: "",
        actsCount: 0,
        actsInfo: {},
        pageNum: 1,
        totalPage: 0,
        pageSize: 4,
        shareConfig:{
          url: this.pageUrl,
          title: this.title,
          pic: "http://www.caqp-id.com/static/image/logo1.png",
        },
        showCode: false,
        qrcode: "",
      }
    },
    computed:{

    },
    mounted (){
      this.pageUrl = window.location.href;
      this.getNewsDetail();
      this.getActsCount();
      this.showQrcode();
    },
    methods: {
      getNewsDetail (){
        this.axios.post("/qfycode-web-pages/news/selectNewsById.do",{
          unitId: this.unitId
        })
        .then( res =>{
          if(res.result){
            this.title = res.data.newsTitle;
            document.title = this.title;
            let resultData = res.data;
            resultData.newsArtifactsList.forEach( item =>{
              if(item.artifactOrder == 1){
                resultData.src = item.artifactPath;
              }
            });
            this.content = resultData;
            this.getActsInfo();
          }
        })
        .catch( error =>{})
      },
      getActsCount (){
        this.axios.post("/qfycode-web-pages/activity/getNewsPeopleCount.do",{
          unitId: this.unitId
        })
        .then( res =>{
          if(res.result){
            this.actsCount = res.data;
          }
        })
        .catch(error=>{});
      },
      getActsInfo (){
        let title = this.content.keySpeaker;
        console.log(title);
        this.axios.post("/qfycode-web-pages/news/getNewsByTitle.do",{
          title: title,
        })
        .then((res) =>{
          if(res.result){
            this.actsInfo = res.data.news;
            res.data.artifact.forEach( item =>{
              if(item.artifactOrder == 1){
                this.actsInfo.src = item.artifactPath;
              }
            })
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      shareToQzone (event){
        let shareConfig = {
          ...this.shareConfig
        };
        this.myUtils.toQzone(event,shareConfig);
      },
      shareToQQ (event){
        let shareConfig = {
          ...this.shareConfig
        };
        this.myUtils.toQQ(event,shareConfig);
      },
      shareToWeibo (event){
        let shareConfig = {
          ...this.shareConfig
        };
        this.myUtils.shareToWeibo(event,shareConfig);
      },
      showQrcode() {
        this.qrcode = this.myUtils.getQrcode(this.pageUrl,(url) =>{
          this.qrcode = url;
        });
      },
      copyUrl (){
        let copyDom = document.getElementById("pageUrl");
        copyDom.select();
        document.execCommand("Copy");
        alert('复制成功，可以直接分享给好友')
      }
    }
  }
</script>

<style scoped>
  @import "./detailCommon.css";

  .detail-content .content-data{
    padding: 20px 5%;
  }
  .content-info .info-img{
    width: 50%;
    margin-right: 30px;
  }
  .sign-btn a{
    display: block;
    padding:10px 0;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #193F90;
    border-radius: 4px;
  }.content-info .info-item{
     justify-content: flex-start;
     align-content: center;
   }
  .content-info .info-item img{
    width: 18px;
    margin-right: 10px;
  }
  .content-info .info-item>div{
    padding: 0;
  }
  .content-info .info-item>div>span:first-child{
    white-space: nowrap;
  }
  .class-wrap{
    font-size: 14px;
    line-height: 20px;
  }
  .class-wrap .class-title{
    font-size: 14px;
    line-height: 18px;
    color: #333;
    padding: 10px 0 10px 20px;
    background-color: #E5ECF2;
  }
  .class-wrap .class-main{
    padding: 50px 0;
  }

  /*.content-info .info-img{
    width: 50%;
    margin-right: 30px;
  }
  .content-info .info-item{
    justify-content: flex-start;
    align-content: center;
  }
  .content-info .info-item img{
    width: 18px;
    margin-right: 10px;
  }
  .content-info .info-item>div{
    padding: 0;
  }
  .content-info .info-item>div>span:first-child{
    white-space: nowrap;
  }
  .sign-wrap{
    font-size: 20px;
    line-height: 22px;
    padding: 30px 0 20px;
    margin-bottom: 30px;
    border: 1px solid #E5ECF2;
    border-top: 4px solid #193F90;
  }
  .sign-wrap .sign-title{
    font-size: 20px;
    line-height: 22px;
    color: #333333;
  }
  .sign-wrap .sign-count{
    font-size: 30px;
    color: #193F90;
    padding: 20px 0;
  }
  .sign-wrap .sign-btn a{
    display: block;
    padding:10px 40px;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    background-color: #193F90;
    border-radius: 4px;
  }
  .sign-wrap .sign-time{
    font-size: 12px;
    padding: 10px 0;
  }
  .class-wrap{
    border: 1px solid #E5ECF2;
  }
  .class-wrap .class-title{
    font-size: 14px;
    line-height: 18px;
    color: #333;
    padding: 10px 0 10px 20px;
    background-color: #E5ECF2;
  }
  .class-wrap .class-main{
    padding: 50px 0;
  }
  .class-wrap img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .class-main .class-text{
    font-size: 14px;
    line-height: 20px;
  }
  .class-main .class-text>span{
    font-weight: bold;
    margin-right: 10px;
  }
  .class-main .class-text>div{
    margin-top: 8px;
  }*/
</style>
