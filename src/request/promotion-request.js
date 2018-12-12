import _mm from '../assets/js/mm.js'
class PromotionFn {
	//获取企业推广列表
	getPromotionList(listParam){
		let url  = "",
			data = {};
		return _mm.request({
			url:"/qfycode-web-pages/news/selectNewsListByTypeId.do",
			data:listParam
		});
	}
	//获取企业推广详情
	getPromotionDetail(unitId){
		return _mm.request({
			url:"/qfycode-web-pages/news/selectNewsById.do",
			data:listParam
		});
	}
}
const Promotion = new PromotionFn();
export default Promotion