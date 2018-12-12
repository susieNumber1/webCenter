<template>
    <div class="clearfix">
        <!-- 查询无结果内容框 -->
    	<div class="main-box">
    		<div class="noresultsCon">
                <img src="../../assets/image/ascend/waring.png" alt="">抱歉！没有找到与<i class="">{{$route.params.code}}</i>条码相关的商品
			</div>
    	</div>
    </div>
</template>
<style>
    /* 查询无结果 start */    
    .noresultsCon {
        height: 35px;
        background: #fff;
        margin: 100px 0px 195px 0px;
        text-align: center;
        font-size: 16px;
        color: #333;
    }
   .noresultsCon img{
    vertical-align: middle;
    margin-right: 15px;
   } 
    /* 查询无结果 end */
</style>