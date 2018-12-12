<template>
  <div class="videoPlayBox" v-if="isShowVideo">
    <div class="videoPlayBoxInner">
        <div class="modelBox_Con">
            <div class="vadio">
              <div class="closeIcon" @click="closeVideo">X</div>
              <video id="videoPlay1" width="100%" height="100%" autoplay="autoplay"  loop="loop" :poster="videoPic" :src="videoPath" x-webkit-airplay="true" webkit-playsinline="true" controls
                    >您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
              </video>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      videoPic:{
        type:String,
        required:true
      },
      videoPath:{
        type:String,
        required:true
      }
    },
    computed:{
      modalShow (){
        return this.$store.state.modal.modalShow
      },
      modalTitle (){
        return this.$store.state.modal.modalTitle
      },
      modalMsg (){
        return this.$store.state.modal.modalMsg
      },
      showCancel (){
        return this.$store.state.modal.showCancel
      }
    },
    created(){
      console.log(this.videoPic)
      console.log(this.videoPath)
    },
    data (){
      return {
        isShowVideo:true
      }
    },
    methods: {
      closeVideo(){
        this.isShowVideo = false;
      },
      hideModal (){
        this.myUtils.hideModal();
      },
      modalConfirm (){
        let storeConfirm = this.$store.state.modal.modalConfirm;
        if(storeConfirm){
          storeConfirm();
          this.myUtils.hideModal();
        }else{
          this.myUtils.hideModal();
        }
      },
      modalCancel (){
        let storeCancel = this.$store.state.modal.modalCancel;
        if(storeCancel){
          storeCancel();
          this.myUtils.hideModal();
        }else{
          this.myUtils.hideModal();
        }
      },
    }
  };
</script>
<style scoped>
 .videoPlayBox{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  background: none;
 }
 .videoPlayBoxInner{
  position: absolute;
  width:600px;
  height:338px;
  top:50%;
  left:50%;
  margin-left: -300px;
  margin-top: -200px;
  border:1px solid #ddd;

 }
 .closeIcon{
  position: absolute;
  width:25px;
  height:25px;
  background: #fff;
  right:10px;
  top:10px;
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  z-index:10;
 }
</style>
