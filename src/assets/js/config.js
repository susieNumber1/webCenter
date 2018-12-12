
export default{
  install(Vue){
    Vue.prototype.pubJson = {
      imgConfig:{
        uploadFilesUrl: "/qfycode-web-center/uploadImage/sourceImg.do?", //图片上传
        imgUrlOld: "/qfycode-web-pages/uploadImage/viewImage.do?callback=1&path=", //图片回显
        // imgUrlPro: "http://img.dzcode.cn", //正式
        imgUrl: "http://pic.dzcode.cn", //测试
        // imgUrl: "http://img.dzcode.cn", //正式
      },
      videoConfig:{
        videoUrl: "/qfycode-web-pages/uploadImage/view.do?path=", //视频回显
        // videoUrl: "http://pic.dzcode.cn",  //正式
        // videoUrl: "http://pic.dzcode.cn",  //测试
      },
    }
  }
}
