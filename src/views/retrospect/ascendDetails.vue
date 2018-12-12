<template>
    <div class="clearfix">
        <!-- 详情内容框 -->
        <!--banner end-->
	    <div class="main-box">
	        <div class="contentTop">
				<div class="Magnifier">
					<div class="MagnifierBox">
						<!--产品参数开始-->
						<div id="preview" class="spec-preview">
							<span class="jqzoom">
	    						<img v-bind:src="bimg" />
	    					</span>
						</div>
						<!--缩图开始-->
						<div class="spec-scroll">
							<a class="prev"></a>
							<a class="next"></a>
							<div class="items">
								<ul>
									<li v-for="(i,index) in goodsPics" :key="index"><img  v-bind:src="i.picUrl" @click="gosrc($event)"></li>
								</ul>
							</div>
						</div>
						<!--缩图结束-->
					</div>
				</div>
				<!--放大镜 end-->
				<div class="details">
					<ul class="detailsLeft">
						<li><span>商品条码:</span><em>{{basicInfo.gtinCode}}</em></li>
						<li><span>批次号:</span><em>{{productInfo.batchNumber}}</em></li>
						<li><span>序列号:</span><em>{{productInfo.serialNumber}}</em></li>
						<li><span>商品名称:</span><em>{{basicInfo.goodsName}}</em></li>
                        <li><span>报告号:</span><em>{{basicInfo.reportNum}}</em></li>
                        <li><span>品牌名称:</span><em>{{basicInfo.brandName}}</em></li>
                        
						<li><span>标准文本:</span><em><img src="../../assets/image/ascend/ChaK.png"/></em>
							<a class="brand"  v-bind:data="basicInfo.standardText"><i></i><b v-bind:value="basicInfo.standardText" @click="toMagnify('standardText',$event)">点击查看大图</b></a>
                            <input type="text" v-bind:value="basicInfo.standardText" v-show="false" id="standardText">
						</li>
                        <li><span>检测报告:</span><em><img src="../../assets/image/ascend/ChaK.png"/></em>
                        <a class="brand" @click="toMagnify('reportPic',$event)"><i></i><b >点击查看大图</b></a>
                        <input type="text" v-bind:value="basicInfo.reportPic" v-show="false" id="reportPic"></li>
                        
                        <li><span>品牌授权证书:</span><em><img src="../../assets/image/ascend/ChaK.png"/></em>
							<a class="brand" @click="toMagnify('brandCertificatePic',$event)"><i></i><b>点击查看大图</b></a>
                            <input type="text" v-bind:value="basicInfo.brandCertificatePic" v-show="false" id="brandCertificatePic">
                            </li>
                        <li><span>产品质量证书:</span><em><img src="../../assets/image/ascend/ChaK.png"/></em>
                        <a class="brand" @click="toMagnify('qualityCertificatePic',$event)"><i></i><b >点击查看大图</b></a>
                        <input type="text" v-bind:value="extCommon.qualityCertificatePic" v-show="false" id="qualityCertificatePic">
                        </li>
                        
						
					</ul>
					<ul class="detailsRight">
						<li><span>企业名称:</span><em>{{company.companyName}}</em></li>
                        <li><span>经营地址:</span><em style="font-size:12px">{{province+city+company.address}}</em></li>
                        <li><span>企业网址:</span><em>{{company.website}}</em></li>
						<li><span>目标市场:</span><em>{{basicInfo.targetMarket}}</em></li>
                        <li><span>标准类型:</span><em>{{basicInfo.standard}}</em></li>
                        <li><span>标准号:</span><em>{{basicInfo.standardNum}}</em></li>
						<li><span>包装重量(kg):</span><em>{{basicInfo.packedWeight}}</em></li>
						<li><span>最小包装:</span><em>长:<i>{{basicInfo.length}}cm</i> 宽:<i>{{basicInfo.width}}cm</i> 高:<i>{{basicInfo.height}}cm</i></em></li>
						<li><span>包装单位:</span><em>{{basicInfo.unit}}</em></li>
                        <li><span>质保期限:</span><em>{{extCommon.expirationDate}}</em></li>
					</ul>
				</div>
			</div>
			<!--内容  头部 end-->
			<div class="contentCon">
				<ul class="ConTab">
					<li>扩展信息</li>
				</ul>
				<div class="ConBox">
					<div class="information">
						<ul class="inLeft">
							<li><span>生产日期:</span><em>{{extCommon.productionDate}}</em></li>
                            <li><span>(92)厂商在供货商处代码:</span><em>{{extCommon.manufacturerCode}}</em></li>
							<li><span>(240)企业自编码:</span><em>{{extCommon.companyCode}}</em></li>
                            <li><span>(241)OEM码:</span><em>{{extCommon.oemCode}}</em></li>
							<li><span>(400)客户购买订单代码:</span><em>{{extCommon.orderCode}}</em></li>
                            <li v-for="i in attributes"><span>{{i.attributeName}}:</span><em>{{i.attrValue}}</em></li>
						</ul>
                        <div style="width:100%;clear:both">
                             <span style="width:80px;height:48px;line-height:48px;display:inline-block">商品描述:</span><span class="inLeft_B clear" @click="desc()"></span>
                             <div v-if="goodsDesc==1">{{togoodsDesc}}</div>
								
                        </div>
                       
					</div>
					<!--扩展信息 end-->
				</div>
			</div>
			<!--内容  中间  end-->
	        <div class="contentBot">
				<ul class="BotTab">
					<li v-bind:class="{'hover':type==0}" @click="tabBtn(0,$event)">流通信息</li>
					<li v-bind:class="{'hover':type==1}" @click="tabBtn(1,$event)">查询记录</li>
				</ul>
				<div class="logistics">
					<div class="circulate" v-if="type==0">
						<div class="BotTitle">
							商品条码{{$route.params.code}} 流通信息
						</div>
						<ul class="Track">
							<li v-for="k in circulations">
								<em></em>
								<span class="date">{{k.occurTime}}</span>
								<span class="City"><i></i>{{k.occurPlace}}</span>
								<span class="text">{{k.circulateInfo}}</span>
							</li>
						</ul>
					</div>
                    <div class="scandiv" v-if="type==1">
                        <table class="ltInfo">
                            <tr class="newInfor">
                                <td colspan="4">查询次数：<span class="cxNum">{{lenrecord}}次</span></td>						
                            </tr>
                            <tr v-for="k in recordList">
                                <td><img src="../../assets/image/ascend/scan1.png"></td>
                                <td class="wlTime">{{k.time}}</td>
                                <td><img src="../../assets/image/ascend/scan2.png"/></td>
                                <td><span class="address">{{k.location}}</span></td>						
                            </tr>
                        </table>
                    </div>
                    
				</div>
                <!--<div id="transparent" v-show="tohide==1">
                    
                </div>-->
                <div id="tobig" v-show="tohide==1">
                    <img  :src="bigPicPath" >
                    <span @click="hide()">X</span>
                </div>
                
			</div>
            <!--内容  底部  end-->
	    </div>
    </div>
</template>
<style>
    .contentTop {
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;
        justify-content:space-between;
        align-items:flex-start;
        margin-top: 20px;
        height: 450px;
        background: #fff;
    }
    /*放大镜*/
    .Magnifier{
        flex:1;
    }
    .details{
        flex:2;
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;
        justify-content:space-between;
        align-items:flex-start;
    }
    .detailsLeft,.detailsRight{
        flex:1;
    }
    .detailsLeft>li,.detailsRight>li{
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;
        justify-content:flex-start;
        align-items:flex-start;
    }
    .detailsLeft>li span, .detailsLeft>li a,.detailsLeft>li em{
        /*flex: 1 auto;*/
        text-align: left;
    }
    .detailsRight>li span{
       /*flex: 1;*/

    }
    .detailsRight>li em{
       /*flex: 2;*/
       align-self:flex-start;
       text-align: left;
    }
    .detailsRight>li em{
        
    }
    .Magnifier {
        height: 468px;
        float: left;
    }
    
    .MagnifierBox {
        margin: 45px auto;
    }
    /*图片放大镜样式*/
    
    .jqzoom {
        height: 254px;
        float: left;
        border: none;
        position: relative;
        padding: 0px;
        cursor: pointer;
        margin: 0px;
        display: block;
    }
    
    .jqzoom>img {
        width: 290px;
        height: 100%;
    }
    
    .zoomdiv {
        z-index: 100;
        position: absolute;
        margin-left: 46px;
        background: #ffffff;
        display: none;
        text-align: center;
        overflow: hidden;
        border: 1px solid #f3f3f3;
        border-left: 0px;
    }
    
    .jqZoomPup {
        z-index: 10;
        visibility: hidden;
        position: absolute;
        border: 1px solid #aaa;
        background: #ffffff;
        opacity: 0.5;
        -moz-opacity: 0.5;
        -khtml-opacity: 0.5;
        filter: alpha(Opacity=50);
    }
    /*图片小图预览列表*/
    
    .spec-preview {
        width: 290px;
        height: 254px;
        border: 1px solid #ddd;
    }
    
    .spec-scroll {
        clear: both;
        margin-top: 56px;
        width: 295px;
        height: 68px;
    }
    
    .spec-scroll>.prev {
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -143px -196px;
        float: left;
        margin-right: 5px;
    }
    
    .spec-scroll>.next {
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -110px -196px;
        float: right;
    }
    
    .spec-scroll>.prev,
    .spec-scroll>.next {
        display: block;
        width: 20px;
        height: 40px;
        margin-top: 13px;
        cursor: pointer;
    }
    
    .spec-scroll>.items {
        float: left;
        position: relative;
        width: 245px;
        height: 68px;
        overflow: hidden;
    }
    
    .spec-scroll>.items>ul {
        position: absolute;
    }
    
    .spec-scroll>.items>ul>li {
        float: left;
        width: 68px;
        height: 68px;
        text-align: center;
        margin-right: 12px;
    }
    
    .spec-scroll>.items>ul>li>img {
        padding: 2px;
        width: 62px;
        height: 62px;
        border: 1px solid #E5E5E5;
    }
    
    .spec-scroll>.items>ul>li>img:hover {
        border: 2px solid #FF6600;
        padding: 1px;
    }
    /*详情*/
    
    .details {
        width: 630px;
      
        float: left;
    }
    
    .detailsLeft {
        padding-top: 28px;
    }
    
    .detailsRight {
        padding-top: 28px;
    }
    
    .detailsLeft>li,
    .detailsRight>li {

        height: 40px;
        line-height: 40px;
    }
    
    .detailsLeft>li>span,
    .detailsRight>li>span {
        display: inline-block;
        color: #333;
        font-size: 14px;
        margin-right: 6px;
    }
    
    .detailsLeft>li>em,
    .detailsRight>li>em {
     
        display: inline-block;
        color: #666;
        font-size: 14px;
    }
    
    .detailsRight>li>em {
  
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .detailsRight>li>em>img {
        margin: 18px 10px 0px 10px;
    }
    
    .detailsRight>li>a {
        display: inline-block;
        float: left;
    }
    
    .detailsRight>li>a>i {
        display: inline-block;
   
        width: 30px;
        height: 30px;
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -73px -200px;
        margin-top: 15px;
    }
    
    .detailsRight>li>a>b {
        display: inline-block;
        float: left;
        color: #4D65E4;
        font-size: 20px;
        font-weight: 100;
    }
    /*内容头部 end*/
    
    .contentCon {
        height: auto;
        margin-top: 20px;
        background: #fff;
        overflow: hidden;
    }
    
    .ConTab {
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid  #194090;
    }
    
    .ConTab>li {
        width: 124px;
        height: 38px;
        text-align: center;
        font-size: 16px;
        color: #194090;
        float: left;
    }
    
    .information {
        padding-top: 20px;
        min-height: 100px;
        font-size: 16px;
        color: #333;
        padding-left: 30px;
    }
    
    .inLeft>li {
        width: 336px;
        float: left;
    }
    
    .inLeft>li>i {
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }
    
    .inLeft_B {
        width: 90px;
        height: 20px;
        display: inline-block;
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -145px -10px;
    }
    
    .inLeft_I {
        width: 21px;
        height: 38px;
    }
    
    .inLeft_a {
        color: #4D65E4;
    }
    
    .inCon {
        width: 336px;
        margin-left: 10px;
        float: left;
    }
    
    .inBot {
        width: 336px;
        margin-left: 10px;
        float: left;
    }
    
    .inLeft>li,
    .inCon>li,
    .inBot>li {
        height: 48px;
        line-height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .inLeft>li>span,
    .inCon>li>span,
    .inBot>li>span {
        margin-right: 10px;
    }
    /*扩展信息 end*/
    
    .deCon>li {
        height: 48px;
        line-height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .deCon>li>span {
        margin-right: 10px;
    }
    .brand b{
        font-size: 14px;
        cursor: pointer;
    }
    /*商品描述 end */
    /*内容 中间  end*/
    
    .contentBot {
        margin-top: 20px;
        background: #fff;
        margin-bottom: 120px;
    }
    
    .BotTab {
        height: 38px;
        line-height: 38px;
        border-bottom:1px solid  #194090;
        padding-left: 3px;
    }
    
    .BotTab>li {
        width: 100px;
        height: 35px;
        text-align: center;
        font-size: 16px;
        color: #aaa;
        float: left;
        cursor: pointer;
    }
    
    .BotTab>li.hover {
        /*border-top: 3px solid #194090;*/
        color: #194090;
        background: #fff;
    }
    
    .BotTitle {
        height: 88px;
        line-height: 80px;
        font-size: 14px;
        color: #333;
        padding-left: 20px;
    }
    
    .circulate {
        /*display:none;*/
    }
    
    .Track {
        padding-left: 50px;
    }
    
    .Track>li {
        height: 60px;
        border-left: 1px solid #bfbfbf;
        font-size: 14px;
        position: relative;
        padding-left: 52px;
        color: #888;
    }
    
    .Track>li>span {
        line-height: 30px;
        display: inline-block;
        margin-top: -6px;
    }
    
    .Track>li>em {
        display: inline-block;
        width: 15px;
        height: 15px;
        position: absolute;
        top: -1px;
        left: -7px;
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -217px -213px;
    }
    
    .Track>li:last-child {
        border-left: 0px;
    }
    
    .City {
        margin: 0px 20px;
    }
    
    .City>i {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -46px -204px;
        float: left;
        margin-top: 4px;
    }
    
    .text {
        width: 780px;
    }
    
    .Track>li:first-child>span {
        color: #4D65E4;
    }
    
    .Track>li:first-child>.City {
        color: #f37405;
    }
    
    .Track>li:first-child>em {
        display: inline-block;
        width: 36px;
        height: 36px;
        position: absolute;
        top: -8px;
        left: -18px;
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -168px -200px;
    }
    
    .Track>li:first-child>.City>i {
        background: url(../../assets/image/ascend/Spirit.png) no-repeat -14px -204px;
    }
    
    .ltInfo {
        font-size: 14px;
        color: #999999;
        width: 250px;
        margin-left: 20px;
        border: none;
    }
    
    .ltInfo img {
        display: block;
        margin: auto;
        border: 0;
    }
    
    .ltInfo tr {
        border: none;
        border-bottom: solid thin #EAEFF3;
    }
    
    .ltInfo tr:nth-child(1) {
        border: none;
    }
    
    .newInfor {
        color: #333333;
    }
    
    .ltInfo td {
        height: 88px;
    line-height: 80px;
    font-size: 16px;
    color: #333;
    /* height: 50px; */
    overflow: hidden;
    border: none;
    }
    
    .wlTime {
        width: 120px;
    }
    
    .cxNum {
        color: #194090;
    }
    
    .describe {
        display: none;
        height: 352px;
        font-size: 16px;
        color: #333;
        padding: 20px 0px 0px 68px;
    }
    
    #tobig {
        position: fixed;
        width: 800px;
        top: 90px;
        background-color: white;
        z-index: 1002;
        cursor: pointer;
        width: 800px;
        height: 480px;
        margin-left: -400px;
        left: 50%;
        text-align: center;
        border: 1px solid #e5e5e5;
    }
    
    #transparent {
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        top: 0%;
        left: 0%;
        background-color: black;
        z-index: 1001;
        -moz-opacity: 0.6;
        opacity: .60;
        filter: alpha(opacity=60);
    }
    
    #tobig img {
        height: 100%;
    }
    
    #tobig span {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: 100px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
    }
    /*内容 底部 end*/
    
    .brandBox,
    .productBox {
        display: none;
        position: fixed;
        top: 90px;
        background-color: white;
        z-index: 1002;
        cursor: pointer;
        filter: progid: DXImageTransform.Microsoft.Shadow(color=#000000, direction=120, strength=4);
        /*兼容ie*/
        -moz-box-shadow: 2px 2px 10px #000000;
        /*兼容firefox*/
        -webkit-box-shadow: 2px 2px 10px #000000;
        /*兼容safari或chrome*/
        box-shadow: 2px 2px 10px #000000;
        /*兼容opera或ie9*/
    }
    
    .brandBox {
        width: 800px;
        height: 480px;
        margin-left: -400px;
        left: 50%;
    }
    
    .brandoff {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        background: red;
        font-size: 16px;
        color: #fff;
        border-radius: 50%;
    }
    
    .productBox {
        width: 800px;
        height: 480px;
        margin-left: -400px;
        left: 50%;
    }
    
    .productoff {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        background: red;
        font-size: 16px;
        color: #fff;
        border-radius: 50%;
    }
</style>
<script>
    export default {
        data() {
            return {
                basicInfo: {},
                company: {},
                extCommon: {},
                attributes: [],
                circulations: [],
                type: 0,
                tohide: 0,
                goodsPics: [],
                bimg: "",
                recordList: [],
                lenrecord: 0,
                province: "",
                city: "",
                goodsDesc: 0,
                togoodsDesc: "",
                productInfo: {
                    batchNumber: "",
                    serialNumber: ""
                },
                bigPicPath:"",
                hover:true
            }
        },
        watch: {
            '$route': 'toload'
        },
        mounted() {
            this.toload();
        },
        methods: {
            toload: function() {
                this.axios.post('/qfycode-web-pages/goods/traceBacKGoods.do', {
                        code: this.$route.params.code
                    }, {
                        showLoading: true,
                    })
                    .then((response) =>{
                        var _p = this;
                        this.basicInfo = response.data.basicInfo;
                        this.company = response.data.company;
                        this.extCommon = response.data.extCommon;
                        this.attributes = response.data.attributes;
                        this.circulations = response.data.circulations;
                        this.goodsPics = response.data.goodsPics;
                        this.goodsPics = [
                            {"picUrl":'/group1/M00/00/02/CqNCDFwKI1CAaGQhAAAX9CVdoLw635.jpg'},
                            {"picUrl":'/group1/M00/00/03/CqNCDFwKLIGAHAR1AAC_OKnycyA471.jpg'}
                        ];
                        this.togoodsDesc = response.data.desc;
                        if (response.data.productInfo) {
                            this.productInfo = response.data.productInfo
                        };
                        if(this.goodsPics.length){
                            var n = this.goodsPics
                            n.forEach((value, index, array) =>{
                                value.picUrl = this.pubJson.imgConfig.imgUrl + value.picUrl;
                            });
                            this.goodsPics = n;
                            this.bimg = this.goodsPics[0].picUrl;
                        }
                        
                        this.axios.post('/qfycode-web-center/dictionary/target_marget/list.do', {}, {
                                showLoading: true,
                            })
                            .then(function(response) {
                                if (response.data.result) {

                                    var market = response.data;
                                    market.forEach(function(value, index, array) {
                                        if (value.dictCode == _p.basicInfo.targetMarket) {
                                            _p.basicInfo.targetMarket = value.dictValue;
                                        }
                                    });

                                }
                            }).catch(function(error) {});
                        this.axios.post('/qfycode-web-center/dictionary/assembe_unit/list.do', this.param, {
                                showLoading: true,
                            })
                            .then(function(response) {
                                if (response.data.result) {
                                    var pack = response.data;
                                    pack.forEach(function(value, index, array) {
                                        if (value.dictCode == _p.basicInfo.unit) {
                                            _p.basicInfo.unit = value.dictValue
                                        }
                                    });
                                }
                            }).catch(function(error) {});
                        this.axios.post('/qfycode-web-center/dictionary/industry_standard/list.do', this.param, {
                                showLoading: true,
                            })
                            .then(function(response) {
                                if (response.data.result) {
                                    var stand = response.data;
                                    stand.forEach(function(value, index, array) {
                                        if (value.dictCode == _p.basicInfo.standard) {
                                            _p.basicInfo.standard = value.dictValue
                                        }
                                    });
                                }
                            }).catch(function(error) {});
                        this.axios.post('/qfycode-web-center/area/selectArea.do', {
                                pid: 0
                            }, {
                                showLoading: true,
                            })
                            .then(function(response) {
                                if (response.data.result) {
                                    var provinceData = response.data;
                                    provinceData.forEach(function(value, index, array) {
                                        if (value.areaCode == _p.company.provinceNo) {
                                            _p.province = value.areaName
                                            _p.axios.post('/qfycode-web-center/area/selectArea.do', {
                                                    pid: _p.company.provinceNo
                                                }, {
                                                    showLoading: true,
                                                })
                                                .then(function(response) {
                                                    if (response.data.result) {
                                                        var cityData = response.data;
                                                        cityData.forEach(function(value, index, array) {
                                                            if (value.areaCode == _p.company.cityNo) {
                                                                _p.city = value.areaName
                                                            }
                                                        });
                                                    }
                                                })
                                                .catch(function(error) {
                                                    console.log(error);
                                                });
                                        }
                                    });
                                }
                            })
                            .catch(function(error) {
                                console.log(error);
                            });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            tabBtn: function(type, event) {
                this.type = type;
                if (type == 1) {
                    this.axios.post('/qfycode-web-center/goods/searchScanLog.do', {
                            barCode: this.$route.params.code
                        }, {
                            showLoading: true,
                        })
                        .then(function(response) {
                            this.recordList = response.data;
                            this.lenrecord = this.recordList.length;
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }

            },
            toMagnify: function(nn, event) {
                var n = document.getElementById(nn);
                this.tohide = 1;
                this.bigPicPath = this.pubJson.imgConfig.imgUrl + n.value;
            },
            hide: function() {
                this.tohide = 0;
            },
            gosrc: function(event) {
                this.bimg = event.target.src;
            },
            desc: function() {
                this.goodsDesc = 1;
            }

        }

    }
</script>