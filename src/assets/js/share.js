
import QRcode from 'qrcode'
export function shareToQzone(event,shareConfig){
  event.preventDefault();
  let _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
  _shareUrl += 'url=' + encodeURIComponent(shareConfig.url||document.location);         //参数url设置分享的内容链接|默认当前页location
  _shareUrl += '&title=' + encodeURIComponent(shareConfig.title || document.title);    //参数title设置分享标题，可选参数
  _shareUrl += '&pics=' + encodeURIComponent(shareConfig.pic || '');                    //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
  _shareUrl += '&showcount=' + shareConfig.showcount || 0;                              //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
  _shareUrl += '&desc=' + encodeURIComponent(shareConfig.desc || '');                   //参数desc设置分享的描述，可选参数
  _shareUrl += '&summary=' + encodeURIComponent(shareConfig.summary || '');             //参数summary设置分享摘要，可选参数
  _shareUrl += '&site=' + encodeURIComponent(shareConfig.site || '');                   //参数site设置分享来源，可选参数
  window.open(_shareUrl,'_blank');
}
export function shareToQQ (event,shareConfig){
  event.preventDefault();
  let _shareUrl = 'https://connect.qq.com/widget/shareqq/index.html?';
  _shareUrl += 'url=' + encodeURIComponent(shareConfig.url || location.href.url);      //分享的链接
  _shareUrl += '&title=' + encodeURIComponent(shareConfig.title || document.title);    //分享的标题
  window.open(_shareUrl,'_blank');
}
export function shareToWeibo (event,shareConfig){
  event.preventDefault();
  let _shareUrl = 'http://v.t.sina.com.cn/share/share.php?title="123"';             //真实的appkey，必选参数
  _shareUrl += '&url='+ encodeURIComponent(shareConfig.url||document.location);         //参数url设置分享的内容链接|默认当前页location，可选参数
  _shareUrl += '&title=' + encodeURIComponent(shareConfig.title||document.title);      //参数title设置分享的标题|默认当前页标题，可选参数
  _shareUrl += '&pic=' + encodeURIComponent(shareConfig.pic||'');                                   //参数pic设置图片链接|默认为空，可选参数
  _shareUrl += '&content=' + 'utf-8';                                                   //参数content设置页面编码gb2312|utf-8，可选参数
  _shareUrl += '&source=' + encodeURIComponent(shareConfig.source||'');
  _shareUrl += '&sourceUrl=' + encodeURIComponent(shareConfig.sourceUrl||'');
  window.open(_shareUrl,'_blank');
}
export function getQrcode (data,success){
  QRcode.toDataURL(data)
    .then( url =>{
      success(url);
    });
}
