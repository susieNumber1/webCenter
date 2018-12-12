<template>
  <index-frame>
    <template slot="index-header">
      <index-header></index-header>
    </template>
    <template slot="index-banner">
      <index-banner></index-banner>
    </template>
    <template slot="index-nav">
      <index-nav></index-nav>
    </template>
    <template slot="index-video">
      <index-video></index-video>
    </template>
    <template slot="index-cases">
      <index-case></index-case>
    </template>
    <template slot="index-partner">
      <index-partner></index-partner>
    </template>
  </index-frame>
</template>
<script>
  import indexFrame from '@/components/index/indexFrame'
  import indexHeader from '@/components/index/indexHeader'
  import indexBanner from '@/components/index/indexBanner'
  import indexNav from '@/components/index/indexNav'
  import indexVideo from '@/components/index/indexVideo'
  import indexCase from '@/components/index/indexCase'
  import indexPartner from '@/components/index/indexPartner'
  import pageFooter from '@/components/pageFooter'
	export default {
    components:{
      indexFrame,
      indexHeader,
      indexBanner,
      indexNav,
      indexVideo,
      indexCase,
      indexPartner,
      pageFooter
    },
    data (){
      return {
      }
    },
    methods: {
    }
	}
</script>
<style>
  .content-list{
    padding-bottom: 1px;
    color: #444;
  }
  .content-list ul{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    margin-top: 40px;
  }
  .content-item{
    border: 1px solid transparent;
    border-radius: 8px;
  }
  .content-item .item-wrap{
    width: 312px;
    border: 1px solid #E7E8EC;
    border-radius: 8px;
    box-shadow: 0 6px 20px #999;
  }
  .content-title{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
  .content-title .title-border{
    width: 100px;
    height: 20px;
    border-bottom: 2px solid #193F90;
  }
  .content-title .title-main{
    font-size: 18px;
    line-height: 24px;
    color: #193F90;
    margin: 0 10px;
    text-align: center;
  }
  .content-title .title-main div:first-child{
    font-size: 24px;
    line-height: 24px;
  }
  .content-title .title-main div:last-child{
    font-size: 12px;
    line-height: 20px;
  }
  .index-content .more{
    text-align: center;
    margin: 40px 0;
  }
  .index-content .more a{
    font-size: 14px;
    line-height: 18px;
    color: #193F90;
    padding: 10px 20px;
    border: 1px solid #193F90;
    font-weight: bold;
  }
</style>
