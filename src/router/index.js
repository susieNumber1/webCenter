import Vue from 'vue'
import Router from 'vue-router'

// pages
import index from '../views/index'
import pageCenter from '../components/pageCenter'
//登录
import login from '../views/login/login'
import loginOut from '../views/login/loginOut'
import register from '../views/login/register'
import registerResult from '../views/login/registerResult'
import resetPassword from '../views/login/resetPassword'
import passwordSuccess from '../views/login/passwordSuccess'

//中心概况login
import centerMain from '../components/viewMain/centerMain'
import centerInfo from '../views/center/centerInfo'
import functions from '../views/center/functions'
import organization from '../views/center/organization'
import guidance from '../views/center/guidance'
import connect from '../views/center/connect'
//新闻动态
import news from '../views/news'
//技术标准
import standardMain from '../components/viewMain/standardMain'
import law from '../views/standard/law'
import literature from '../views/standard/literature'
import knowledge from '../views/standard/knowledge'
//推荐视频
import videos from '../views/video/videos.vue'
//应用推广
import promotion from '../views/promotion/promotion.vue'
import detailPromotion from '../views/promotion/detailPromotion.vue'
//追溯平台
import bussinessMain from '../components/viewMain/bussinessMain'
import noApplication from '../views/bussiness/noApplication'
import application from '../views/bussiness/application'
import handle from '../views/bussiness/handle'
import partsBase from '../views/bussiness/partsBase'
import parts from '../views/bussiness/parts'
import partsData from '../views/bussiness/partsData'
import product from '../views/bussiness/product'
import gln from '../views/bussiness/gln'

import retrospectMain from '../components/viewMain/retrospectMain.vue'
import what from '../views/retrospect/what.vue'
import advantage from '../views/retrospect/advantage.vue'
import price from '../views/retrospect/price.vue'
import ascendNotfind from '../views/retrospect/ascendNotfind.vue'
import ascendDetails from '../views/retrospect/ascendDetails.vue'
//培训活动
import activityMain from '../components/viewMain/activityMain'
import course from '../views/activity/course'
import acts from '../views/activity/acts'
//详情
import detailNews from '../views/detail/detailNews'
import detailCourse from '../views/detail/detailCourse'
import detailActs from '../views/detail/detailActs'
import detailStandard from '../views/detail/detailStandard'
import detailLaws from '../views/detail/detailLaws'
import detailSign from '../views/detail/detailSign'
//底部详情
import fDetail from '../views/detail/footer_detail'
//报名
import signUp from '../views/signUp'
import signList from '../views/signList'
//
import newsList from '../views/newsResult'
import notFound from '../views/404'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    // 登录
    {
      path: '/',
      name: 'pageCenter',
      component: pageCenter,
      redirect: 'index',
      children:[
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/loginOut',
          name: 'loginOut',
          component: loginOut
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/registerResult',
          name: 'registerResult',
          component: registerResult
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          component: resetPassword
        },
        {
          path: '/passwordSuccess',
          name: 'passwordSuccess',
          component: passwordSuccess
        },
      ]
    },
    {
      path: '/',
      name: 'pageCenter',
      component: pageCenter,
      redirect: 'index',
      children:[
        // 导航二级页面
        {
          path: '/center',
          name: 'center',
          component: centerMain,
          meta:{
                title:"中心简介"
          },
          children:[
            {
              path: 'info',
              name: 'centerInfo',
              component: centerInfo,
              meta:{
                title:"中心简介"
              }
            },{
              path: 'functions',
              name: 'functions',
              component: functions,
              meta:{
                title:"中心职能"
              }
            },{
              path: 'organization',
              name: 'organization',
              component: organization,
              meta:{
                title:"组织架构"
              }
            },{
              path: 'guidance',
              name: 'guidance',
              component: guidance,
              meta:{
                title:"指导机构"
              }
            },{
              path: 'connect',
              name: 'connect',
              component: connect,
              meta:{
                title:"联系我们"
              }
            }
          ]
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path: '/standard',
          name: 'standard',
          component: standardMain,
          children:[
            {
              path: 'law',
              name: 'law',
              component: law
            },
            {
              path: 'literature',
              name: 'literature',
              component: literature
            },
            {
              path: 'knowledge',
              name: 'knowledge',
              component: knowledge
            },
          ]
        },
        {
          path:'/retrospect',
          name:'retrospect',
          component:retrospectMain,
          children:[
            {
              path:'what',
              name:'what',
              component:what,
              meta:{
                title:"何为追溯"
              }
            },
            {
              path:'advantage',
              name:'advantage',
              component:advantage,
              meta:{
                title:"平台优势"
              }
            },
            {
              path:'price',
              name:'price',
              component:price,
              meta:{
                title:"平台价值"
              }
            },
            {
              path:'ascendNotfind/:code',
              name:'ascendNotfind',
              component:ascendNotfind,
              meta:{
                title:"追溯查询"
              }
            },
            {
              path:'ascendDetails/:code',
              name:'ascendDetails',
              component:ascendDetails,
              meta:{
                title:"追溯查询"
              }
            }
          ]
        },
        {
          path: '/bussiness',
          name: 'bussiness',
          component: bussinessMain,
          children:[
            {
              path: 'noApplication',
              name: 'noApplication',
              component: noApplication
            },
            {
              path: 'application',
              name: 'application',
              component: application
            },
            {
              path: 'handle',
              name: 'handle',
              component: handle
            },
            {
              path: 'partsBase',
              name: 'partsBase',
              component: partsBase
            },
            {
              path: 'parts',
              name: 'parts',
              component: parts
            },
            {
              path: 'partsData',
              name: 'partsData',
              component: partsData
            },
            {
              path: 'product',
              name: 'product',
              component: product
            },
            {
              path: 'gln',
              name: 'gln',
              component: gln
            },
          ]
        },
        {
          path: '/activity',
          name: 'activity',
          component: activityMain,
          children:[
            {
              path: 'course',
              name: 'course',
              component: course,
            },
            {
              path: 'acts',
              name: 'acts',
              component: acts,
            },
          ]
        },
        {
          path: '/videos',
          name: 'videos',
          component: videos,
          meta:{
            title:"推荐视频"
          }
        },
        {
          path: '/promotion',
          name: 'promotion',
          component: promotion,
          meta:{
            title:"应用推广"
          }
        },
        // 各类型详情页
        {
          path: '/detailNews/:unitId',
          name: 'detailNews',
          component: detailNews,
          props: true
        },
        {
          path: '/detailCourse/:unitId',
          name: 'detailCourse',
          component: detailCourse,
          props: true
        },
        {
          path: '/detailActs/:unitId',
          name: 'detailActs',
          component: detailActs,
          props: true
        },
        {
          path: '/detailStandard/:unitId',
          name: 'detailStandard',
          component: detailStandard,
          props: true
        },
        {
          path: '/detailLaws/:unitId',
          name: 'detailLaws',
          component: detailLaws,
          props: true
        },
        {
          path: '/detailSign/:unitId',
          name: 'detailSign',
          component: detailSign,
          props: true
        },
        {
          path: '/detailPromotion/:unitId',
          name: 'detailPromotion',
          component: detailPromotion,
          props:true
        },
        // 不在导航的二级页面
        {
          path: '/signList',
          name: 'signList',
          component: signList,
        },
        {
          path: '/signUp/:id',
          name: 'signUp',
          component: signUp,
        },
        {
          path: '/newsList/:searchParam',
          name: 'newsList',
          component: newsList,
          props: true
        },
        // 底部详情页
        {
          path: '/fDetail/:unitId',
          name: 'fDetail',
          component: fDetail
        },{
          path: '*',
          name: 'notFound',
          component: notFound
        }
      ]
    },
  ]
})
