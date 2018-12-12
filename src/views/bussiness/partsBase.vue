<template>
  <div class="menu-content">
    <div class="step-img">
      <img src="../../assets/image/bussiness/step3.png" alt="">
    </div>
    <div class="step-info">
      <ul class="step-container">
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step1</span>
            <span>在平台注册</span>
          </div>
          <div class="step-intro">
            点击
            <a href="">‘注册’</a>
            在网站顶部或者点击
            <a href="">‘我要入驻’</a>
            在网站底部，填写用户，密码，手机等注册信息，获取平台账户。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step2</span>
            <span>申请中心管理代码</span>
          </div>
          <div class="step-intro">
            在账户右侧菜单栏，点击 <a href="">‘申请中心管理代码’</a>填写所有资料之后提交申请，
            平台将在三个工作日内审核，审核通过之后，发放中心管理代码，同事在账户右侧菜单开通数据备案权限。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step3</span>
            <span>填写配件基础信息</span>
          </div>
          <div class="step-intro">
            在开通的备案权限里，点击 <a href="">‘配件信息备案’</a>生产企业将产品基本信息上传，并上传商品图片。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step4</span>
            <span>填写配件扩展信息</span>
          </div>
          <div class="step-intro">
            配件基础信息与图片上传完成后，请继续更新配件扩展信息，比如更多属性，点击‘添加属性’添加新的属性。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step5</span>
            <span>提交信息</span>
          </div>
          <div class="step-intro">
            配件基础信息和扩展信息按照规则添加完成并提交，用户通过 <a href="">‘商品追溯’</a>页面便可追溯商品的基本信息。
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "partsBase"
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
