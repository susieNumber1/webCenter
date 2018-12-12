<template>
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
</template>

<script>
	export default {
		name: "indexPartner",
    data (){
		  return {
        partnerList1: [
          {
            src: '/static/image/partner/zdjg1.png',
            path: 'http://www.aqsiq.gov.cn/'
          },
          {
            src: '/static/image/partner/zdjg2.png',
            path: 'http://www.sac.gov.cn/'
          },
          {
            src: '/static/image/partner/zdjg4.png',
            path: 'http://www.ancc.org.cn/'
          },
          {
            src: '/static/image/partner/zdjg3.png',
            path: 'http://www.caqp.org.cn/'
          }
        ],
        partnerList2: [
          {
            src: '/static/image/partner/tytc.png',
            path: 'http://www.tongyou-tc.com/'
          },
          {
            src: '/static/image/partner/xdl.png',
            path: 'http://www.newland.com.cn'
          },
          {
            src: '/static/image/partner/szsm.png',
            path: 'http://www.digitalchina.com/'
          },
          {
            src: '/static/image/partner/aichaung.jpg',
            path: 'http://www.acctrue.com/'
          },
          {
            src: '/static/image/partner/hnwe.jpg',
            path: 'http://www.honeywell.com.cn/'
          },
          {
            src: '/static/image/partner/bmjs.png',
            path: 'https://www.zebra.com/cn/zh.html'
          },
          {
            src: '/static/image/partner/wemk.png',
            path: 'http://www.volmark.cn/'
          }
        ],
        partnerList3: [
          {
            src: '/static/image/partner/fz.png',
            path: 'http://www.founderpod.com/'
          },
          {
            src: '/static/image/partner/xlwl.png',
            path: 'http://www.xl-scan.cn/index.html'
          },
          {
            src: '/static/image/partner/xdx.png',
            path: 'http://www.xundasoft.com/'
          },
          {
            src: '/static/image/partner/qfkj.png',
            path: 'http://www.qianfan.com.cn/'
          },
          {
            src: '/static/image/partner/zl.png',
            path: '###'
          },
          {
            src: '/static/image/partner/hfrhy.png',
            path: 'http://www.haferd.com/'
          },
          {
            src: '/static/image/partner/ylgf.png',
            path: 'http://www.yueling.com.cn/'
          },
        ],
        partnerList4: [
          {
            src: '/static/image/partner/wzl.png',
            path: 'http://www.attit.cn/'
          },
          {
            src: '/static/image/partner/kns.png',
            path: 'http://www.cognex.cn/'
          },
          {
            src: '/static/image/partner/sc.png',
            path: 'http://www.scdzkj.net/'
          },
          {
            src: '/static/image/partner/bsd.png',
            path: 'http://www.postek.com.cn/cn/Index.aspx'
          },
          {
            src: '/static/image/partner/lnb.png',
            path: 'http://www.whlabel.com/'
          },
          {
            src: '/static/image/partner/sdky.png',
            path: 'http://www.keyuancat.com/'
          },
          {
            src: '/static/image/partner/xbkj.png',
            path: 'http://www.supoin.com/'
          },
        ],
      }
    }
	}
</script>

<style scoped>
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
</style>
