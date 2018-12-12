<template>
  <div class="menu-content">
    <div class="step-img">
      <img src="../../assets/image/bussiness/step1.png" alt="">
    </div>
    <div class="step-info">
      <ul class="step-container">
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step1</span>
            <span>在编码追溯平台中心注册</span>
          </div>
          <div class="step-intro">
            点击
            <a href="/###">‘注册’</a>
            在网站顶部或者点击
            <a href="/###">‘我要入驻’</a>
            在网站底部，填写用户，密码，手机等注册信息，获取平台账户。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step2</span>
            <span>获取申请配件商品条码的公函</span>
          </div>
          <div class="step-intro">
            登录编码追溯中心平台账户，点击 <a href="###">‘申请商品条码函件’</a>在账户右侧菜单栏。 填写企业名称，联系人，联系电话，经营地址等信息提交，获取申请函。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step3</span>
            <span>去中国物品编码中心办理商品条码或者办理全球位置码(GLN)</span>
          </div>
          <div class="step-intro">
            生产企业和经销商：请申请单位携带营业执照副本及复印件，商品条码申请函，企业公章，
            到中国物品编码中心当地分支机构线下办理商品条码，分支机构初审通过，申请单位缴费；
            分支机构提交中国物品编码复审，大约2-3周之后，分支机构发放系统成员证书及GDS卡。
            流通企业和维修企业：登陆中国物品编码中心（网址：www.ancc.org.cn），企业注册账户，
            完成实名认证之后，选择号段并支付费用，编码中心审核通过，办法全球位置码（GLN）电子证书。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step4</span>
            <span>回到配件编码中心平台申请行业管理代码</span>
          </div>
          <div class="step-intro">
            申请到商品条码和全球位置码（GLN）之后，回到编码追溯中心（网址：http://www.caqp-id.com）点击‘申请中心管理代码’在账户右侧菜单栏。
            填写所有资料之后提交申请，平台将在三个工作日内审核，通过之后免费发放中心管理代码证书并邮寄企业。
            同时在账户右侧菜单开通数据备案权限。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step5</span>
            <span>配件基础信息备案</span>
          </div>
          <div class="step-intro">
            在开通的备案权限里，点击 <a href="">‘配件信息备案’</a>生产企业将产品基本信息按照表格上传做为平台备案。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step6</span>
            <span>配件产品做赋码</span>
          </div>
          <div class="step-intro">
            由系统集成商线下指导生产企业完成赋码。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step7</span>
            <span>配件大数据信息备案</span>
          </div>
          <div class="step-intro">
            按照平台数据接口要求实时上传配件有效数据。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step8</span>
            <span>查询追溯商品</span>
          </div>
          <div class="step-intro">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	export default {
		name: "noApplication"
	}
</script>

<style scoped>
  .menu-content{
    font-size: 14px;
    padding: 0;
  }
  .step-img img{
    display: block;
    width: 100%;
  }
  .step-info{
    margin-top: 30px;
    padding-left: 20px;
    border-left: 1px solid #E5ECF2;
  }
  .step-container{
    position: relative;
  }
  .step-container .step-item:last-child{
    margin-bottom: 0;
  }
  .step-container .step-item:last-child .step-intro{
    position: relative;
    left: -21px;
    top: initial;
    z-index: 10;
    padding-left: 21px;
    background-color: #fff;
  }
  .step-item{
    margin-bottom: 30px;
  }
  .step-item a{
    color: #DF455D;
  }
  .step-item .step-bg{
    position: absolute;
    left: -26px;
    top: initial;
  }
  .step-item .step-title span{
    display: inline-block;
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
  .step-item .step-title .title-bg{
    padding: 0 10px;
    background-color: #024095;
    border-radius: 8px;
    color: #fff;
    margin-right: 10px;
    font-weight: normal;
  }
  .step-item .step-intro{
    font-size: 14px;
    line-height: 20px;
    color: #666;
    margin-top: 10px;
  }
</style>
