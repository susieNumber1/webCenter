<template>
    <div class="amap-page-container"  style="height:400px;">
      <el-amap
        vid="amapDemo"  
        :center="center"
        :zoom="zoom"  
        class="amap-demo" :dragEnable="true" :zoomEnable="true">
        <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"></el-amap-marker>
        <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
      </el-amap>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }

    .prompt {
      background: white;
      width: 400px;
      height: 40px;
      text-align: left;
      font-size: 14px;
    }
  </style>

  <script>
    module.exports = {
      data: function() {
        return {
          zoom: 17,
          center: [116.427949,40.006073],
          markers: [],
          windows: [],
          window: ''
        };
      },

      mounted() {
        let markers = [];
        let windows = [];

        let num = 1;
        let self = this;

        for (let i = 0 ; i < num ; i ++) {
          markers.push({
            position: [116.427949,40.006073 + i * 0.001],
            events: {
              click() {
                self.windows.forEach(window => {
                  window.visible = false;
                });

                self.window = self.windows[i];
                self.$nextTick(() => {
                  self.window.visible = true;
                });
              }
            }
          });

          windows.push({
            position: [116.427949,40.006073 + i * 0.001],
            content: `<div class="prompt">北京鼎证物联信息技术有限公司<br/>地址：北京市朝阳区北苑路86号北美国际商务中心K2座</div>`,
            visible: false
          });
        }

        this.markers = markers;
        this.windows = windows;
      }
    };
</script>