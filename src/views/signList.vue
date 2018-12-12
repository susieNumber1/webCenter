<template>
  <div class="page-container">
    <div class="sign-list-wrap flex-row">
      <div class="left-wrap flex-column">
        <img src="../assets/image/avatar.png" alt="">
        <div>{{userName}}</div>
        <ul>
          <li>
            <a href="#" class="active">我的报名</a>
          </li>
        </ul>
      </div>
      <div class="right-wrap">
        <div class="table-title">
          <span>您共有</span>
          <span class="title-count">{{total}}</span>
          <span>条报名信息</span>
        </div>
        <div class="flex-row table-nav">
          <div style="font-weight: bold;">报名类型 : </div>
          <ul class="flex-row">
            <li @click="getList" :class="currentNav === 0?'active':''">全部（{{total}}）</li>
            <li @click="getTraningList" :class="currentNav === 1?'active':''">培训（{{tableTraningList.length}}）</li>
            <li @click="getActsList" :class="currentNav === 2?'active':''">活动（{{tableActsList.length}}）</li>
          </ul>
        </div>
        <div class="table-main">
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>名称</th>
                <th>类型</th>
                <th>联系人</th>
                <th>联系方式</th>
                <th>报名人数</th>
                <th>报名时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableList">
                <td style="font-weight: bold;">{{index+1}}</td>
                <td><a href="javascript:;" @click="redirectPath(item)">{{item.activityTitle}}</a></td>
                <td>{{item.type === 'PX' ?  '培训' : '活动'}}</td>
                <td>{{item.contacts}}</td>
                <td>{{item.phoneNumber}}</td>
                <td>{{item.peopleNumber}}</td>
                <td>{{item.createTime}}</td>
                <td>{{item.approvalStatus == 0 ? "待确认" : item.approvalStatus == 1 ? "已报名" : item.approvalStatus == 2 ? "已取消" : ""}}</td>
                <td><router-link :to="'/detailSign/' + item.id">查看</router-link></td>
              </tr>
            </tbody>
          </table>
          <paginate v-if="totalPage > 0"
                    style="margin-top: 50px;"
                    v-model="currentPage"
                    :pageCount="totalPage"
                    :clickHandler="paginateHandler"
                    :prevText="'上一页'"
                    :nextText="'下一页'"
                    :containerClass="'content-page flex-row'"
                    :page-class="'page-item'">
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "signList",
    data (){
		  return {
        _token: "",
        userName: "",
        currentPage: 1,
        itemsPerPage: 10,
        total: 0,
        totalPage: 0,
        tableList: [],
        tableActsList: [],
        tableTraningList: [],
        currentNav: 0,
      }
    },
    mounted (){
      let token = this.$cookies.get("_token");
      if(token){
        this._token = token;
        this.userName = this.$cookies.get("userName");
        this.getList();
      }else{
        this.$router.push("/login");
      }
    },
    methods:{
		  getList (){
		    this.currentNav = 0;
        this.axios.post("/qfycode-web-pages/activity/getMyAllEnroll.do",{
          _token: this._token,
          currentPage: this.currentPage,
          itemsPerPage: this.itemsPerPage,
        })
          .then( res =>{
            if(res.result){
              this.tableList = res.data.rows;
              this.total = res.data.total;
              this.totalPage = Math.ceil(this.total/this.itemsPerPage);

              this.tableTraningList = [];
              this.tableActsList = [];
              res.data.rows.forEach( item =>{
                if(item.type === 'PX'){
                  this.tableTraningList.push(item);
                }
                if(item.type === 'HD'){
                  this.tableActsList.push(item);
                }
              });
            }else{
              this.$router.push("/login");
            }
          })
          .catch( error =>{})
      },
      getTraningList (){
        this.currentNav = 1;
        this.tableList = this.tableTraningList;
        this.totalPage = Math.ceil(this.tableTraningList.length/this.itemsPerPage);
      },
      getActsList (){
        this.currentNav = 2;
		    this.tableList = this.tableActsList;
        this.totalPage = Math.ceil(this.tableActsList.length/this.itemsPerPage);
      },
      redirectPath (item){
		    let route = "";
		    if(item.type === 'HD'){
		      route = "/detailActs/";
        }
        if(item.type === 'PX'){
		      route = "/detailCourse/";
        }
        route += item.activityId;
		    this.$router.push(route);
      },
      paginateHandler (pageNum){
        this.itemsPerPage = pageNum;
        this.getList();
      }
    },
	}
</script>

<style scoped>
  .page-container:before{
    content: "";
    display: table;
    width: 100%;
    height: 40px;
    background-color: #193F90;
  }
  .sign-list-wrap{
    width: 90%;
    margin: 30px auto;
    border: 1px solid #E5ECF2;
  }
  .left-wrap{
    width: 20%;
    font-size: 14px;
    line-height: 16px;
    color: #999;
    align-self: flex-start;
  }
  .left-wrap img{
    width: 50px;
    height: 50px;
    border: 1px solid #E5ECF2;
    border-radius: 50%;
    margin-top: 50px;
  }
  .left-wrap>div{
    font-size: 12px;
    margin: 30px 0;
  }
  .left-wrap>ul{
    width: 100%;
  }
  .left-wrap ul li a{
    display: block;
    width: 100%;
    color: #333333;
    line-height: 40px;
    text-align: center;
    border-left: 4px solid transparent;
    box-sizing: border-box;
  }
  .left-wrap ul li a.active{
    border-left: 4px solid #FFD202;
    background-color: #E5ECF2;
  }
  .right-wrap{
    width: 80%;
    padding: 20px 20px 40px;
    box-sizing: border-box;
    align-self: flex-start;
    border-left: 1px solid #E5ECF2;
  }
  .table-title{
    font-size: 16px;
    line-height: 30px;
    color: #333;
    font-weight: bold;
  }
  .table-title .title-count{
    color: #FFD202;
  }
  .table-nav{
    justify-content: flex-start;
    margin: 30px 0 20px;
    font-size: 14px;
    line-height: 20px;
    color: #666;
    padding-bottom: 20px;
    border-bottom: 1px solid #E5ECF2;
  }
  .table-nav>div{
    margin-right: 30px;
  }
  .table-nav>ul>li{
    padding: 8px 30px;
    margin-right: 20px;
    border: 1px solid #E5ECF2;
    border-radius: 4px;
    cursor: pointer;
  }
  .table-nav>ul>li.active{
    background-color: #FFD202;
  }
  .table-main table{
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    /*border: 1px solid #E5ECF2;*/
    table-layout: fixed;
  }
  .table-main table tr{
    border: 1px solid #E5ECF2;
  }
  .table-main table tr th{
    padding: 10px 0;
    font-weight: bold;
  }
  .table-main table tr th:first-child{
    border-left: none;
  }
  .table-main table th,.table-main table tr td{
    padding: 6px 0;
    text-align: center;
    border-left: 1px solid #E5ECF2;
  }
  .table-main table a{
    color: #193F90;
  }
</style>
