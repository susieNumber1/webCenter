<template>
    <div class="menu-content">
      <ul>
        <li v-for="item in newsList">
          <router-link :to="'/detailLaws/'+item.unitId" class="news-item flex-row">
            <span>{{item.newsTitle}}</span>
            <span class="timer">{{item.lastUpdatedTime.split(" ")[0]}}</span>
          </router-link>
        </li>
      </ul>
      <paginate v-if="totalPage > 0"
                style="margin-top: 50px;"
                v-model="pageNum"
                :pageCount="totalPage"
                :clickHandler="paginateHandler"
                :prevText="'上一页'"
                :nextText="'下一页'"
                :containerClass="'content-page flex-row'"
                :page-class="'page-item'">
      </paginate>
    </div>
</template>

<script>
	export default {
		name: "law",
    created (){
      this.getNewsList();
    },
    data (){
		  return {
		    pageNum: 1,
        pageSize: 10,
        totalPage: 0,
        newsList:[],
      }
    },
    methods: {
		  getNewsList (){
		    this.axios.post("/qfycode-web-pages/news/selectNewsListByTypeId.do",{
		      typeId: "ZZFG",
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },{
		      showLoading: true,
        })
          .then (res=>{
            if(res.result){
              this.newsList = res.data.newsList;
              this.totalPage = Math.ceil(res.data.total/this.pageSize);
            }
          })
          .catch(e=>{})
      },
      paginateHandler (pageNum){
        this.pageNum = pageNum;
        this.getNewsList();
      }
    }
	}
</script>

<style scoped>
  .menu-content{
    width: 70%;
    padding: 0 50px 0 0;
  }
  .news-item{
    justify-content: space-between;
    font-size: 14px;
    line-height: 18px;
    color: #666;
    padding: 20px 0;
    border-bottom: 1px solid #E5ECF2;
  }
  .news-item .timer{
    flex: none;
    margin-left: 20px;
  }
</style>
