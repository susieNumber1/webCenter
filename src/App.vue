<template>
  <div id="app">
    <router-view/>
    <my-loading></my-loading>
    <my-modal></my-modal>
  </div>
</template>
<script>

</script>
<style>
  @import "assets/css/common.css";
  .ellipsis{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ellipsis-multi{
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
