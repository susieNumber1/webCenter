<template>
  <div class="page-container">
    <div class="pageson-banner">
      <img src="/static/image/index/banner.png" alt="">
    </div>
    <div class="detail-main">
      <div class="detail-content flex-row">
        <div class="content-common">
          <div class="content-title">{{title}}</div>
          <div class="content-main">
            <div class="content-data" v-html="content.newsContent"></div>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailUserAgreement",
    props:{
      unitId: String | Number
    },
    data (){
      return {
         
      }
    },
    computed:{

    },
    mounted (){
 
    },
    methods: {
       
    }
  }
</script>

<style scoped>
  @import "./detailCommon.css";
  .detail-content .content-main{
    width: 90%;
    margin: 0 auto;
  }
  .detail-content .content-data{
    padding: 20px 5%;
    border: 1px solid #E5ECF2;
  }
</style>
