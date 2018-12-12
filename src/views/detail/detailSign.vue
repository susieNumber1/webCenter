<template>
  <div class="page-container">
    <!--<div class="pageson-banner">
      <img src="/static/image/index/banner.png" alt="">
    </div>
    <div class="detail-main">
      <div class="detail-title">
        <span class="title-page">技术标准 ·</span>
        <span class="title-page">政策法规 ·</span>
        <span class="title-page">政策法规详情</span>
      </div>
      <div class="detail-content flex-row">
        <div class="content-common">
          <div class="content-title">{{title}}</div>
          <div class="content-main">
            <div class="content-data" v-html="content.newsContent"></div>
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
    </div>-->
    <div class="detail-content">
      <div class="content-common">
        <div class="content-title">{{signInfo.activityTitle}}</div>
        <div class="content-main">
          <div class="sign-item">
            <span>类型 ： </span>
            <span>{{signInfo.type === 'PX'?'培训':signInfo.type === 'HD'?'活动':''}}</span>
          </div>
          <div class="sign-item">
            <span>状态 ： </span>
            <span style="color: #FD3B65;">{{signInfo.approvalStatus == 0 ? "待确认" : signInfo.approvalStatus == 1 ? "已报名" : signInfo.approvalStatus == 2 ? "已取消" : ""}}</span>
          </div>
          <div class="sign-item">
            <span>报名时间 ： </span>
            <span>{{signInfo.createTime}}</span>
          </div>
          <div class="sign-item">
            <span>公司名称 ： </span>
            <span>{{signInfo.companyName}}</span>
          </div>
          <div class="sign-item">
            <span>联系人 ： </span>
            <span>{{signInfo.contacts}}</span>
          </div>
          <div class="sign-item">
            <span>联系方式 ： </span>
            <span>{{signInfo.phoneNumber}}</span>
          </div>
          <div class="sign-item">
            <span>报名人数 ： </span>
            <span>{{signInfo.peopleNumber}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "detailSign",
    props:{
      unitId: String | Number
    },
    data (){
		  return{
		    _token: "",
		    title: "",
        userInfo:{},
        signInfo:{},
      }
    },
    mounted (){
      this._token = this.$cookies.get("_token");
      this.getInfo();
      console.log(this.unitId);
    },
    methods:{
      getInfo (){
        this.axios.post("/qfycode-web-pages/activity/getEnrollInfo.do",{
          _token: this._token,
          id: this.unitId
        })
          .then( res =>{
            if(res.result){
              this.signInfo = res.data.enrollInfo;
            }
          })
          .catch( error =>{})
      }
    },
	}
</script>

<style scoped>
  @import "./detailCommon.css";
  .page-container:before{
    content: "";
    display: table;
    width: 100%;
    height: 40px;
    background-color: #193F90;
  }
  .detail-content .content-common{
    width: 70%;
    margin: 0 auto;
    border-bottom: 2px solid #E5ECF2;
  }
  .detail-content .content-title{
    border-bottom: 2px solid #E5ECF2;
  }
</style>
