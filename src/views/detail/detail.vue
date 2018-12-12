<template>
  <div class="page-container">
    <div class="pageson-banner">
      <img src="/static/image/index/banner.png" alt="">
    </div>
    <div class="detail-main">
      <div class="detail-title">
        <span class="title-page">新闻动态 ·</span>
        <span class="title-detail">新闻详情</span>
      </div>
      <div class="detail-content flex-row">
        <div class="content-left">
          <div class="content-title">{{title}}</div>
          <div class="content-main" v-html="content"></div>
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
        <div class="content-right">
          <div class="content-title">
            <span class="recommend">为你推荐</span>
            <a href="javascript:;" @click="getNewsList">
              <img src="../../assets/image/refresh.png" alt="">
              <span>换一批</span>
            </a>
          </div>
          <div class="recommend-list">
            <ul>
              <li class="flex-row recommend-item" v-for="item in newsList">
                <img :src="pubJson.imgConfig.imgUrl + item.src" alt="">
                <div class="ellipsis-multi">{{item.newsTitle}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "detail",
    props:{
		  unitId: String | Number
    },
    mounted (){
      this.pageUrl = window.location.href;
		  this.getNewsDetail();
		  this.getNewsList();
		  this.showQrcode();
		  // console.log(this.$route);
    },
    data (){
		  return {
		    pageUrl: "",
		    title: "",
        content: "",
        newsList:[],
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
    methods: {
		  getNewsDetail (){
		    this.axios.post("/qfycode-web-pages/news/selectNewsById.do",{
		      unitId: this.unitId
        })
          .then( res =>{
            if(res.result){
              this.title = res.data.newsTitle;
              document.title = this.title;
              this.content = res.data.newsContent;
            }
          })
          .catch( error =>{})
      },
      getNewsList (){
		    if(this.pageNum >= this.totalPage){
		      this.pageNum = 1;
        }
		    this.axios.post("/qfycode-web-pages/news/selectNewsListByTypeId.do",{
		      typeId: "XWZX",
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },)
          .then( res =>{
            if(res.result){
              let resultData = res.data.newsList;
              resultData.forEach( item =>{
                item.newsArtifactsList.forEach(v =>{
                  if(v.artifactOrder == 1){
                    item.src = v.artifactPath;
                  }
                });
              });
              this.newsList = resultData;
              this.totalPage = Math.ceil(res.data.total/this.pageSize);
              this.pageNum ++;
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

<style>
  @import "./detailCommon.css";
</style>
