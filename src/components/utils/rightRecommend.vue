<template>
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
        <li class="flex-row recommend-item" v-for="item in recommendList">
          <img :src="pubJson.imgConfig.imgUrlPro + item.src" alt="">
          <div class="ellipsis-multi">{{item.newsTitle}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      url: {
       type: String,
       required: true
      },
      typeId:{
        type:String,
        required:true
      }
    },
    data (){
      return {
        recommendList:[],
        pageNum: 1,
        pageSize: 4,
        totalPage: 0,
      }
    },
    mounted(){
      this.getNewsList();
    },
    methods: {
      getNewsList (){
        if(this.pageNum >= this.totalPage){
          this.pageNum = 1;
        }
        this.axios.post(this.url,{
          typeId: this.typeId,
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
            this.recommendList = resultData;
            this.totalPage = Math.ceil(res.data.total/this.pageSize);
            this.pageNum ++;
          }
        })
        .catch( error =>{})
      },
    }
  };
</script>
<style scoped>
 
 .content-title{
  font-size: 20px;
  line-height: 20px;
  color: #193F90;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 2px solid #193F90;
  clear: both;
}
.content-title img{
  width: 16px;
  margin:0 10px;
  vertical-align: baseline;
}
.content-title .recommend{
  font-size: 16px;
  color: #193F90;
  font-weight: bold;
  float: left;
}
.content-title a{
  float: right;
}
.content-title a span{
  font-size: 14px;
}
.recommend-list{
  padding-bottom: 20px;
  border-bottom: 1px solid #193F90;
}
.recommend-list .recommend-item:last-child{
  border-bottom: 1px solid transparent;
}
.recommend-item{
  justify-content: flex-start;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #E5ECF2;

}
.recommend-item img{
  width: 50px;
  margin-right: 10px;
}
.ellipsis-multi{
  width:80%;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}
</style>
