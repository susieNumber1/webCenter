import store from '../../vuex/store.js'
import * as utils from './utils.js'
import * as share from './share.js'

export default{
  install(Vue){
    Vue.prototype.myUtils = {
      showLoading (){
        utils.showLoading();
      },
      hideLoading (){
        utils.hideLoading();
      },
      showModal (modalObj){
        let newConfig = {
          modalShow: true,
          ...modalObj
        };
        store.dispatch('showModal',newConfig);
      },
      hideModal (){
        store.dispatch('showModal',{
          modalShow: false
        })
      },
      toQzone (event,shareConfig){
        share.shareToQzone(event,shareConfig);
      },
      toQQ (event,shareConfig){
        share.shareToQQ(event,shareConfig);
      },
      shareToWeibo (event,shareConfig){
        share.shareToWeibo(event,shareConfig);
      },
      getQrcode (data,success){
        share.getQrcode(data,success);
      },
    }
  }
}
