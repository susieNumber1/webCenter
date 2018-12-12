<template>
  <div class="index-banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
        <a :href="item.link">
          <img :src="index === swiperList.length-1 ? item.url: (imgConfig.imgUrlPro + item.url)">
          <!--<img :src="'http://pic.dzcode.cn' + item.url">-->
          <!--<img :src="'/qfycode-web-pages/uploadImage/viewImage.do?callback=1&path=' + item.url">-->
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
	export default {
		name: "indexBanner",
    mounted (){
      this.getCarousel();
    },
    data (){
		  return{
        imgConfig: this.pubJson.imgConfig,
        swiperList:[
          {
            url: "/static/image/index/banner.png",
            link: "/###"
          },{
            url: "/static/image/index/banner.png",
            link: "/###"
          }
        ],
        swiperOption: {
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        },
      }
    },
    methods: {
		  getCarousel (){
        this.axios.post("/qfycode-web-pages/carousel/list.do",{
          type: 0
        })
          .then( res =>{
            if(res.result){
              this.swiperList = res.data;
              this.swiperList.push({
                url: "/static/image/index/banner.png",
                link: "/###"
              });
            }
          })
          .catch( err =>{})
      }
    }
	}
</script>

<style scoped>
  .index-banner{
    width: 100%;
    min-height: 400px;
  }
  .swiper-button-prev{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: url("../../assets/image/index/banner-prev.png") center;
  }
  .swiper-button-next{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: url("../../assets/image/index/banner-next.png") center;
  }
  .swiper-slide img{
    display: block;
    width: 100%;
  }
</style>
