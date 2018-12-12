<template>
  <div class="menu-content">
    <div class="step-img">
      <img src="../../assets/image/bussiness/step5.png" alt="">
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
            <span>联系业务人员获取接口文档</span>
          </div>
          <div class="step-intro">
            请联系平台业务人员了解详情并获取数据接口文档，电话：010-59775001。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step4</span>
            <span>按照标准接口要求提供相应数据</span>
          </div>
          <div class="step-intro">
            请技术人员按照接口标准文档提供平台所需数据。
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step5</span>
            <span>网站获取大数据</span>
          </div>
          <div class="step-intro">
            平台获取数据后，实时显示到商品追溯信息里。
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "partsData"
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
