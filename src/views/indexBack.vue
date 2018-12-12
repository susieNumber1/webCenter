<template>
  <div class="page-main">
    <div class="index-header">
      <div class="header-wrap">
        <index-header></index-header>
      </div>
      <div class="index-banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swiperList" :key="item">
            <a href="###">
              <img :src="item">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="index-content">
      <div class="code-wrap">
        <div class="entry">
          <img src="../assets/image/index/code-entry.png" alt="">
          <div class="code">
            <img src="../assets/image/index/code.png" alt="">
            <div>扫二维码 关注我们</div>
          </div>
        </div>
      </div>
      <div class="nav-wrap">
        <ul class="content-nav">
          <li v-for="(item,index) in contentNav" :class="item.active ? 'active':''" @click="clickContentNav(item,indexBack)">
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
            <li v-for="item in contentList" class="content-item">
              <div class="item-wrap">
                <img :src="item.src" alt="">
                <div class="intro">{{item.text}}</div>
                <div class="timer">
                  <img src="../assets/image/index/timer.png" alt=""><span>{{item.timer}}</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="more">
            <a href="javascript:;">MORE</a>
          </div>
        </div>
      </div>
      <div class="case-wrap">
        <div class="content-case">
          <div class="case-video">
            <div class="content-title">
              <div class="title-border"></div>
              <div class="title-main">
                <div>推荐视频</div>
                <div>RECOMMOND VIDEO</div>
              </div>
              <div class="title-border"></div>
            </div>
            <div class="content-list">
              <ul>
                <li class="content-item"  v-for="item in videoList">
                  <div class="item-wrap">
                    <!--<video src=""></video>-->
                    <img :src="item.src" alt="">
                    <div class="title">{{item.name}}</div>
                  </div>
                </li>
              </ul>
              <div class="more">
                <a href="javascript:;">MORE</a>
              </div>
            </div>
          </div>
          <div class="case-classic">
            <div class="content-title">
              <div class="title-border"></div>
              <div class="title-main">
                <div>经典案例</div>
                <div>CLASSIC CASE</div>
              </div>
              <div class="title-border"></div>
            </div>
            <div class="content-list">
              <ul>
                <li class="content-item"  v-for="item in caseList"
                    :class="item.name.length < 20 ? 'item-bg flex-column':'item-bar'">
                  <div class="item-wrap">
                    <!--<video src="" ></video>-->
                    <div class="main" v-html="item.name.replace(' ','<br/>')"></div>
                    <!--<div class="main">{{item.name}}</div>-->
                  </div>
                </li>
              </ul>
              <div class="more">
                <a href="javascript:;">MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="partner-wrap">
        <div class="content-title">
          <div class="title-border"></div>
          <div class="title-main">
            <div>合作伙伴</div>
            <div>CORPORATE PARTNER</div>
          </div>
          <div class="title-border"></div>
        </div>
        <ul class="flex-row">
          <li v-for="item in partnerList1">
            <a :href="item.path" target="_blank"><img :src="item.src" alt=""></a>
          </li>
        </ul>
        <ul class="flex-row">
          <li v-for="item in partnerList2">
            <a :href="item.path" target="_blank"><img :src="item.src" alt=""></a>
          </li>
        </ul>
        <ul class="flex-row">
          <li v-for="item in partnerList3">
            <a :href="item.path" target="_blank"><img :src="item.src" alt=""></a>
          </li>
        </ul>
        <ul class="flex-row">
          <li v-for="item in partnerList4">
            <a :href="item.path" target="_blank"><img :src="item.src" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>
<script>
  import indexHeader from '../components/index/indexHeader'
  import pageFooter from '../components/pageFooter'
	export default {
    components:{
      indexHeader,
      pageFooter
    },
    data (){
      return {
        swiperList:[
          "/static/image/index/banner.png",
          "/static/image/index/banner1.png",
        ],
        swiperOption: {
          loop: true,
          speed: 1000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        },
        currentContent: 0,
        contentNav: [
          {
            name: "热门新闻",
            active: true,
            icon: "/static/image/index/news.png",
            iconActive: "/static/image/index/news-active.png",
          },
          {
            name: "政策法规",
            active: false,
            icon: "/static/image/index/law.png",
            iconActive: "/static/image/index/law-active.png",
          },
          {
            name: "中心培训",
            active: false,
            icon: "/static/image/index/train.png",
            iconActive: "/static/image/index/train-active.png",
          },
          {
            name: "最新活动",
            active: false,
            icon: "/static/image/index/activity.png",
            iconActive: "/static/image/index/activity-active.png",
          },
        ],
        contentList:[
          {
            src: "/static/image/index/news-img.png",
            text: "除了食品和药品，这个行业同样需要建设全程追溯体系",
            timer: "2018.11.16"
          },
          {
            src: "/static/image/index/news-img.png",
            text: "除了食品和药品，这个行业同样需要建设全程追溯体系",
            timer: "2018.11.16"
          },
          {
            src: "/static/image/index/news-img.png",
            text: "除了食品和药品，这个行业同样需要建设全程追溯体系",
            timer: "2018.11.16"
          },
        ],
        videoList:[
          {
            name: "推荐视频",
            src: "/static/image/index/video1.png",
          },
          {
            name: "推荐视频",
            src: "/static/image/index/video1.png",
          },
          {
            name: "推荐视频",
            src: "/static/image/index/video1.png",
          },
        ],
        caseList: [
          {
            name: "千帆汽配行业 追溯解决方案",
          },
          {
            name: "2009-2017年汽车后市场产值规模持续增长，随着汽车保有量进入2亿时代，汽车后市场在2018年已进入万亿时代。国家不断出台更高标准，零部件产品质量需要保证其一致性和可靠性，企业需加强过程控制能力。汽车零部件市场的竞争态势将更加激烈，需要掌握产品核心技术、加强上游基础产业有力支撑。加快技术进步、提升创新开发能力时不我待，零部件企业需要具备与整车企业同步开发能力，达到整车配套体系等等。",
          },
          {
            name: "2009-2017年汽车后市场产值规模持续增长，随着汽车保有量进入2亿时代，汽车后市场在2018年已进入万亿时代。国家不断出台更高标准，零部件产品质量需要保证其一致性和可靠性，企业需加强过程控制能力。汽车零部件市场的竞争态势将更加激烈，需要掌握产品核心技术、加强上游基础产业有力支撑。加快技术进步、提升创新开发能力时不我待，零部件企业需要具备与整车企业同步开发能力，达到整车配套体系等等。",
          },
        ],
        partnerList1: [
          {
            src: '/static/image/partner/zdjg1.png',
            path: '###'
          },
          {
            src: '/static/image/partner/zdjg2.png',
            path: '###'
          },
          {
            src: '/static/image/partner/zdjg4.png',
            path: '###'
          },
          {
            src: '/static/image/partner/zdjg3.png',
            path: '###'
          }
        ],
        partnerList2: [
          {
            src: '/static/image/partner/tytc.png',
            path: '###'
          },
          {
            src: '/static/image/partner/xdl.png',
            path: '###'
          },
          {
            src: '/static/image/partner/szsm.png',
            path: '###'
          },
          {
            src: '/static/image/partner/aichaung.jpg',
            path: '###'
          },
          {
            src: '/static/image/partner/hnwe.jpg',
            path: '###'
          },
          {
            src: '/static/image/partner/bmjs.png',
            path: '###'
          },
          {
            src: '/static/image/partner/wemk.png',
            path: '###'
          }
        ],
        partnerList3: [
          {
            src: '/static/image/partner/fz.png',
            path: '###'
          },
          {
            src: '/static/image/partner/xlwl.png',
            path: '###'
          },
          {
            src: '/static/image/partner/xdx.png',
            path: '###'
          },
          {
            src: '/static/image/partner/qfkj.png',
            path: '###'
          },
          {
            src: '/static/image/partner/zl.png',
            path: '###'
          },
          {
            src: '/static/image/partner/hfrhy.png',
            path: '###'
          },
          {
            src: '/static/image/partner/ylgf.png',
            path: '###'
          },
        ],
        partnerList4: [
          {
            src: '/static/image/partner/wzl.png',
            path: '###'
          },
          {
            src: '/static/image/partner/kns.png',
            path: '###'
          },
          {
            src: '/static/image/partner/sc.png',
            path: '###'
          },
          {
            src: '/static/image/partner/bsd.png',
            path: '###'
          },
          {
            src: '/static/image/partner/lnd.png',
            path: '###'
          },
          {
            src: '/static/image/partner/sdky.png',
            path: '###'
          },
          {
            src: '/static/image/partner/xbkj.png',
            path: '###'
          },
        ],
      }
    },
    methods: {
      clickContentNav (item,index){
        this.contentNav.forEach( i =>{
          i.active = false;
        });
        item.active = true;
        this.currentContent = indexBack;
      }
    }
	}
</script>
<style scoped>
  .index-header{
    position: relative;
  }
  .header-wrap{
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  .swiper-button-prev{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: url("../assets/image/index/banner-prev.png") center;
  }
  .swiper-button-next{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: url("../assets/image/index/banner-next.png") center;
  }
  .swiper-slide img{
    display: block;
    width: 100%;
  }
  /* content-nav */
  .nav-wrap,.content-case{
    width: 74%;
    margin: 0 auto;
  }
  .content-nav{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
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
  .index-content{
    position: relative;
  }
  .index-content .code-wrap{
    position: absolute;
    right: 4px;
    top: 65px;
  }
  .index-content .entry {
    padding: 5px;
    background-color: #DFE3EF;
  }
  .index-content .code{
    display: none;
    position: absolute;
    right: 40px;
    top: -40px;
    width: 120px;
    padding: 10px 10px;
    background: url("../assets/image/index/code-background.png") no-repeat center;
    background-size: contain;
  }
  .index-content .code img{
    display: block;
    width: 88%;
  }
  .index-content .code div{
    width: 88%;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  .index-content .entry:hover .code{
    display: block;
  }
  /* partner */
  .partner-wrap{
    width: 84%;
    padding: 60px 0;
    margin: 0 auto;
  }
  .partner-wrap .content-title{
    margin-bottom: 40px;
  }
  .partner-wrap .flex-row{
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 30px;
  }
  .partner-wrap .flex-row a{
    display: block;
  }
  /* page common */
  .content-list{
    padding-bottom: 1px;
    color: #444;
  }
  .content-list ul{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    margin-top: 40px;
  }
  .content-item{
    border: 1px solid transparent;
    border-radius: 8px;
  }
  .content-item .item-wrap{
    width: 312px;
    border: 1px solid #E7E8EC;
    border-radius: 8px;
    box-shadow: 0 6px 20px #999;
  }
  .content-item .intro{
    font-size: 14px;
    line-height: 18px;
    padding: 10px 10px;
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
  .content-item .title{
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    padding: 15px 10px;
  }
  .content-item.active{
    /*box-shadow: ;*/
  }
  .index-content .more{
    text-align: center;
    margin: 40px 0;
  }
  .index-content .more a{
    font-size: 14px;
    line-height: 18px;
    color: #193F90;
    padding: 10px 20px;
    border: 1px solid #193F90;
    font-weight: bold;
  }
  .content-title{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
  .content-title .title-border{
    width: 100px;
    height: 20px;
    border-bottom: 2px solid #193F90;
  }
  .content-title .title-main{
    font-size: 18px;
    line-height: 24px;
    color: #193F90;
    margin: 0 10px;
    text-align: center;
  }
  .content-title .title-main div:first-child{
    font-size: 24px;
    line-height: 24px;
  }
  .content-title .title-main div:last-child{
    font-size: 12px;
    line-height: 20px;
  }

  /* content-case */
  .case-wrap{
    background: url("../assets/image/index/earth.png") no-repeat center;
    background-size: cover;
  }
  .case-video,.case-classic{
    padding-top: 30px;
  }
  .case-classic .content-item{
    border-radius: 0;
  }
  .case-classic .content-list .content-item{
    border: none;
  }
  .case-classic .content-list .content-item .item-wrap{
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  .case-classic .content-list .content-item .item-wrap .main{
    height: 100%;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .content-list .content-item.item-bg{
    height: 300px;
  }
  .content-list .content-item.item-bar{
    height: 220px;
    padding: 40px 0;
  }
  .content-list .content-item.item-bar .item-wrap{
    height: 100%;
  }
  .content-list .content-item.item-bg .main{
    font-size: 36px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }
  .content-list .content-item.item-bar .main{
    font-size: 16px;
    line-height: 20px;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 11;
    /*display: -moz-box;*/
    /*-moz-box-orient: vertical;*/
    /*-moz-line-clamp: 11;*/
  }
  .content-list .content-item.item-bg:nth-child(1){
    background: url("../assets/image/index/blue-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bg:nth-child(2){
    background: url("../assets/image/index/purple-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bg:nth-child(3){
    background: url("../assets/image/index/green-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bar:nth-child(1){
    background: url("../assets/image/index/blue-bar.png") repeat-x top center;
    background-size: contain;
  }
  .content-list .content-item.item-bar:nth-child(2){
    background: url("../assets/image/index/purple-bar.png") repeat-x top center;
    background-size: contain;
  }
  .content-list .content-item.item-bar:nth-child(3){
    background: url("../assets/image/index/green-bar.png") repeat-x top center;
    background-size: contain;
  }
</style>
