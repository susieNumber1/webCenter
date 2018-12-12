// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vuexStore from './vuex/store'
import axios from './ajax/index'
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '559a6f9851df820b32eac485fb609a30',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.prototype.axios = axios;
Vue.use(Vuex);
//require plugins
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate);
// require styles
import 'swiper/dist/css/swiper.css'

// my common plugins
import myUtils from './assets/js/common'
Vue.use(myUtils);
// my common components
import myLoading from './components/utils/loading'
import myModal from './components/utils/modal'
Vue.component('myLoading',myLoading);
Vue.component('myModal',myModal);


import pubJson from './assets/js/config';
Vue.use(pubJson);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store: vuexStore,
  components: { App },
  template: '<App/>'
});
