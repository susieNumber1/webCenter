<template>
    <div class="page-container">
      <div class="form-wrap">
        <div class="form-title">我要报名</div>
        <div class="form-container">
          <div class="item-wrap flex-row">
            <div class="flex-row">
              <span style="color: red;">*</span>
              <span>公司名称 ：</span>
            </div>
            <div class="input-item">
              <input type="text" placeholder="请输入公司名称" maxlength="11"
                     v-model="params.companyName"/>
            </div>
          </div>
          <div class="item-wrap flex-row">
            <div>
              <span style="color: red;">*</span>
              <span>联系人 ： </span>
            </div>
            <div class="input-item">
              <input type="text"  placeholder="请输入联系人"
                     v-model="params.connects"/>
            </div>
          </div>
          <div class="item-wrap flex-row">
            <div>
              <span style="color: red;">*</span>
              <span>联系方式 ： </span>
            </div>
            <div class="input-item">
              <input type="text"  placeholder="请输入联系方式"
                     v-model="params.phoneNumber"/>
            </div>
          </div>
          <div class="item-wrap flex-row">
            <div>
              <span style="color: red;">*</span>
              <span>报名人数 ： </span>
            </div>
            <div class="input-item">
              <select @change="changePeopleNumber" v-model.number="params.peopleNumber">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <div class="item-wrap toggle-item flex-row" v-for="(item,index) in peopleList">
            <div>
              <span style="color: red;">*</span>
              <span>报名人{{index+1}} ： </span>
            </div>
            <div style="width: 70%;height: auto;">
              <div class="input-item">
                <input type="text"  placeholder="请输入姓名"
                       v-model="item.personName"/>
              </div>
              <div class="input-item">
                <input type="text"  placeholder="请输入身份证号"
                       v-model="item.idNumber"/>
              </div>
            </div>
          </div>
          <div class="item-wrap flex-row">
            <div>
              <span>微信 ： </span>
            </div>
            <div class="input-item">
              <input type="text"  placeholder="请输入微信号"
                     v-model="params.wechat"/>
            </div>
          </div>
          <div class="item-wrap flex-row">
            <div>
              <span>邮箱 ： </span>
            </div>
            <div class="input-item">
              <input type="text"  placeholder="请输入邮箱"
                     v-model="params.email"/>
            </div>
          </div>
        </div>
        <div class="form-btn" @click="onSubmit">确定</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "signUp",
    props:{
		  unitId: String | Number
    },
    data (){
		  return {
        params: {
          _token: '',
          companyName: '',
          connects: '',
          phoneNumber: '',
          peopleNumber: 1,
          wechat: '',
          email: '',
        },
        peopleList: [
          {
            personName: "",
            idNumber: "",
          },
        ],
      }
    },
    mounted (){
      let token = this.$cookies.get("_token");
      if(token){
        this.params._token = token;
      }else{
        this.$router.push("/login");
      }
      console.log(this.unitId);
    },
    methods: {
      changePeopleNumber (){
        this.$nextTick( () =>{
          let list = [];
          for (let i = 0;i<this.params.peopleNumber;i++){
            list.push({
              personName: "",
              idNumber: "",
            });
          }
          this.peopleList = list;
        });
      },
      onSubmit (){
        let params = {
          ...this.params,
          activityId: this.unitId,
        };
        let list = [];
        this.peopleList.forEach( item =>{
          let obj = {};
          obj["personName"] = item.personName;
          obj["idNumber"] = item.idNumber;
          list.push(obj);
        });
        params.enrollPersonInfoPo = JSON.stringify(list);
        this.axios.post("/qfycode-web-pages/activity/insertEnroll.do",params)
          .then( res =>{
            if(res.result){
              this.$router.push("/signList");
            }
          })
          .catch( err =>{})
      },
    }
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
  .form-wrap{
    width: 500px;
    margin: 60px auto;
    font-size: 16px;
  }
  .form-title{
    font-size: 18px;
    line-height: 20px;
    color: #666;
    padding-bottom: 30px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid #E5ECF2;
  }
  .form-container{
    margin-top: 50px;
  }
  .item-wrap{
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .item-wrap>div{
    height: 42px;
    line-height: 42px;
  }
  .input-item{
    width: 70%;
    height: 40px;
    border: 1px solid #C3C3C3;
    border-radius: 2px;
  }
  .input-item input{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #666;
    text-indent: 20px;
  }
  .input-item select{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #666;
    text-indent: 20px;
    border: none;
    outline: none;
  }
  .toggle-item{
    justify-content: space-between;
    align-items: flex-start;
  }
  .toggle-item .input-item{
    width: 100%;
  }
  .toggle-item>div:first-child{
    padding-left: 15px;
  }
  .toggle-item .input-item{
    margin-bottom: 10px;
  }
  .form-btn{
    width: 60%;
    color: #fff;
    padding: 16px 0;
    margin: 50px auto 0;
    text-align: center;
    background-color: #193F90;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
