<template>
  <div class="page-container">
    <div class="pageson-banner">
      <img src="../../assets/image/banner/standard.png" alt="">
    </div>
    <div class="detail-main">
      <div class="detail-title">
        <router-link to="/standard/law" class="title-page">技术标准 ·</router-link>
        <router-link to="/standard/literature" class="title-page">标准文献 ·</router-link>
        <span class="title-page">标准详情</span>
      </div>
      <div class="detail-content flex-row">
        <div class="content-common">
          <div class="content-title">{{title}}</div>
          <div class="content-main">
            <div class="content-data" v-html="content.newsContent"></div>
            <div class="book-recommend flex-row">
              <img :src='pubJson.imgConfig.imgUrl + content.src'>
              <ul class="book-info">
                <li>{{content.recombkname}}</li>
                <li>出版社：<span >{{content.publishhome}}</span></li>
                <li>平装：<span >{{content.pagenums}}</span></li>
                <li>语种：<span >简体中文</span></li>
                <li>
                  <a v-bind:href="content.links" target="_blank">去购买</a>
                </li>
              </ul>
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
  </div>
</template>

<script>
  export default {
    name: "detailCourse",
    props:{
      unitId: String | Number
    },
    data (){
      return {
        pageUrl: "",
        title: "",
        content: "",
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
    border: 1px solid #E5ECF2;
  }
  .content-main .book-recommend{
    justify-content: flex-start;
    padding: 50px 0;
    margin-top: 50px;
    border-top: 1px solid #E5ECF2;
  }
  .book-recommend>img{
    width: 100px;
    margin-right: 50px;
    border: 1px solid #E5ECF2;
  }
  .book-recommend .book-info{
    font-size: 16px;
    line-height: 30px;
    color: #444;
  }
  .book-recommend .book-info span{
    font-size: 14px;
    color: #999;
    margin-left: 10px;
  }
  .book-recommend .book-info a{
    font-size: 14px;
    color: #fff;
    padding: 6px 30px;
    background-color: #c42326;
    border-radius: 6px;
  }
</style>
