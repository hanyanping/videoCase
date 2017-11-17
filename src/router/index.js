import Vue from 'vue'
import Router from 'vue-router'
import surveyContant from  '@/page/surveyContant'
import login from '@/page/login'
import one from '@/page/one'
import caseManage from '@/page/caseManage'
import seatManage from '@/page/seatManage'
import institutionManage from '@/page/institutionManage'
import insitutionEditor from '@/page/insitutionEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: surveyContant,
      children: [{
        path: '/',
        component: caseManage
      }, {
        path: '/seatManage',
        component: seatManage
      }, {
        path: '/institutionManage',
        component: institutionManage,
        children:[{
          path:'/insitutionEditor',
          component: insitutionEditor,
        }]
      }]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/one',
      component: one
    }
  ]
})

