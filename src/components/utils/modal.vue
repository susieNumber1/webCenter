<template>
  <div class="modal-wrap" v-show="modalShow">
    <div class="modal-container">
      <div class="modal-main">
        <div class="modal-title">
          <span v-html="modalTitle"></span>
          <img src="/static/image/cancel.png" alt="" @click="hideModal">
        </div>
        <div class="modal-content">
          <div v-html="modalMsg"></div>
        </div>
        <div class="modal-btn-group">
          <a href="javascript:;" class="modal-btn cancel"  
            v-if="showCancel" @click="modalCancel">取消</a>
          <a href="javascript:;" class="modal-btn confirm" @click="modalConfirm">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
    data (){
      return {

      }
    },
    methods: {
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
  .modal-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    color: #333;
  }
  .modal-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-main{
    min-width: 400px;
    margin: 5px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,.2)
  }
  .modal-title{
    height: 46px;
    font-size: 16px;
    line-height: 46px;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding: 0 10px 0 20px;
  }
  .modal-title img{
    float: right;
    width: 28px;
    height: 28px;
    margin: 9px 10px 0 0;
    cursor: pointer;
  }
  .modal-content{
    font-size: 18px;
    line-height: 24px;
    color: #333;
    text-align: center;
    padding:40px 10px;
  }
  .modal-btn-group{
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 20px 0 40px;
  }
  .modal-btn-group .modal-btn{
    width: 82px;
    height: 34px;
    font-size: 16px;
    line-height: 34px;
    margin: 0 10px 0 30px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }
  .modal-btn-group .confirm{
    color: #fff;
    background-color: #0f3c98;
  }
  .modal-btn-group .cancel{
    color: #666;
    background-color: #eee;
  }
</style>
