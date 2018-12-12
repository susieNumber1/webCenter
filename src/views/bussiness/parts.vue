<template>
  <div class="menu-content">
    <div class="step-img">
      <img src="../../assets/image/bussiness/step4.png" alt="">
    </div>
    <div class="step-info">
      <ul class="step-container">
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step1</span>
            <span>赋码系统安装</span>
          </div>
          <div class="step-intro">

          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step2</span>
            <span>用户信息维护</span>
          </div>
          <div class="step-intro">
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step3</span>
            <span>产品编码数据设置</span>
          </div>
          <div class="step-intro">
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step4</span>
            <span>选择赋码方案</span>
          </div>
          <div class="step-intro">
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step5</span>
            <span>实施产品赋码</span>
          </div>
          <div class="step-intro">
          </div>
        </li>
        <li class="step-item">
          <div class="step-bg"><img src="../../assets/image/bussiness/circle.png" alt=""></div>
          <div class="step-title">
            <span class="title-bg">Step6</span>
            <span>产品扫描入库上传编码信息</span>
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
    name: "parts"
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
    height: 50px;
  }
</style>
