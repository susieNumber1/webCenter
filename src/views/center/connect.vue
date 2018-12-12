<template>
  <div class="menu-content">
    <p class="iconPosi"><img src="../../assets/image/connectIcon.png" alt=""><span>北京鼎证物联信息技术有限公司</span></p>
    <p>
      地址：北京市朝阳区北苑路86号北美国际商务中心K2座
    </p>
    <p>
      邮编：100020
    </p>
    <p>
      电话：010-59775001
    </p>


    <div class="posiBox"><b-map-component></b-map-component></div>
  </div>
</template>

<script>
 import BMapComponent from '../../components/utils/BMapComponent.vue'
  export default {
    data (){
      return {
      }
    },
    mounted(){

    },
    methods:{
    },
    components:{
      BMapComponent:BMapComponent
    },
  }
</script>

<style scoped>
.iconPosi{
  margin-bottom: 35px;
  line-height: 20px;
}
.iconPosi span{
  padding-left:20px;
  font-weight: bold;
  color:#535353;
  vertical-align: super;
}

.posiBox{
  width:100%;
  height:300px;
  margin-top:30px;
}
</style>

