<template>
  <div class="case-classic">
    <div class="content-title">
      <div class="title-border"></div>
      <div class="title-main">
        <div>经典案例</div>
        <div>CLASSIC CASE</div>
      </div>
      <div class="title-border"></div>
    </div>
    <div class="content-list">
      <ul>
        <li class="content-item"  v-for="item in caseList"
            :class="item.name.length < 20 ? 'item-bg flex-column':'item-bar'">
          <div class="item-wrap" >
            <!--<video src="" ></video>-->
            <div class="main" :class="item.name.length < 20 ? '' : 'ellipsis-multi'" v-html="item.name.replace(' ','<br/>')"></div>
            <!--<div class="main">{{item.name}}</div>-->
          </div>
        </li>
      </ul>
      <div class="more">
        <router-link to="/promotion">MORE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "indexCase",
    data (){
		  return{
        caseList: [
          {
            name: "千帆汽配行业 追溯解决方案",
          },
          {
            name: "2009-2017年汽车后市场产值规模持续增长，随着汽车保有量进入2亿时代，汽车后市场在2018年已进入万亿时代。国家不断出台更高标准，零部件产品质量需要保证其一致性和可靠性，企业需加强过程控制能力。汽车零部件市场的竞争态势将更加激烈，需要掌握产品核心技术、加强上游基础产业有力支撑。加快技术进步、提升创新开发能力时不我待，零部件企业需要具备与整车企业同步开发能力，达到整车配套体系等等。",
          },
          {
            name: "2009-2017年汽车后市场产值规模持续增长，随着汽车保有量进入2亿时代，汽车后市场在2018年已进入万亿时代。国家不断出台更高标准，零部件产品质量需要保证其一致性和可靠性，企业需加强过程控制能力。汽车零部件市场的竞争态势将更加激烈，需要掌握产品核心技术、加强上游基础产业有力支撑。加快技术进步、提升创新开发能力时不我待，零部件企业需要具备与整车企业同步开发能力，达到整车配套体系等等。",
          },
        ],
      }
    }
	}
</script>

<style scoped>
  .case-classic{
    padding-top: 30px;
  }
  .case-classic .content-item{
    border-radius: 0;
  }
  .case-classic .content-list .content-item{
    border: none;
  }
  .case-classic .content-list .content-item .item-wrap{
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  .case-classic .content-list .content-item .item-wrap .main{
    height: 100%;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .content-list .content-item.item-bg{
    height: 300px;
  }
  .content-list .content-item.item-bar{
    height: 220px;
    padding: 40px 0;
  }
  .content-list .content-item.item-bar .item-wrap{
    height: 100%;
  }
  .content-list .content-item.item-bg .main{
    font-size: 36px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }
  .content-list .content-item.item-bar .main{
    font-size: 16px;
    line-height: 20px;
    color: #999;
    -webkit-line-clamp: 11;
  }
  .content-list .content-item.item-bg:nth-child(1){
    background: url("../../assets/image/index/blue-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bg:nth-child(2){
    background: url("../../assets/image/index/purple-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bg:nth-child(3){
    background: url("../../assets/image/index/green-bg.png") no-repeat center;
    background-size: cover;
  }
  .content-list .content-item.item-bar:nth-child(1){
    background: url("../../assets/image/index/blue-bar.png") repeat-x top center;
    background-size: contain;
  }
  .content-list .content-item.item-bar:nth-child(2){
    background: url("../../assets/image/index/purple-bar.png") repeat-x top center;
    background-size: contain;
  }
  .content-list .content-item.item-bar:nth-child(3){
    background: url("../../assets/image/index/green-bar.png") repeat-x top center;
    background-size: contain;
  }
</style>
