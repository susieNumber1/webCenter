<template>
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
        <router-link to="/videos">MORE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "indexVideo",
    data (){
		  return{
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
      }
    }
	}
</script>

<style scoped>
  .case-video{
    padding-top: 30px;
  }
  .content-item .title{
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    padding: 15px 10px;
  }
</style>
