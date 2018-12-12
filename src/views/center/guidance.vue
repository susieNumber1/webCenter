<template>
  <div class="menu-content">
  	<ul>
  		<li><a href="http://samr.saic.gov.cn/"><img src="../../assets/image/Guidance/StateAdministration.png" alt=""></a></li>
  		<li><a href="http://www.ancc.org.cn/"><img src="../../assets/image/Guidance/codeCenter.png" alt=""></a></li>
  		<li><a href="http://www.sac.gov.cn/"><img src="../../assets/image/Guidance/StandardizedManagement.png" alt=""></a></li>
  		<li><a href="http://www.caqp.org.cn/"><img src="../../assets/image/Guidance/PromotionAssociation.png" alt=""></a></li> 
  	</ul>
  </div>
</template>

<script>
	export default {
		name: "guidance"
	}
</script>

<style scoped>
	ul li{
		display: inline-block;
		width:360px;
		height:90px;
		margin-right: 30px;
		margin-bottom: 25px;
		border:1px solid #f5f5f5;
		background-color:#fff;
		-moz-box-shadow: 5px 5px 5px #f5f5f5; /* 老的 Firefox */
		box-shadow: 5px 5px 5px #f5f5f5;
		border-radius: 8px;
		overflow: hidden;
	}
	ul li a{
		display: block;
		width:300px;
		height:54px;
		margin: 18px 30px;
		overflow: hidden;
	}
</style>
