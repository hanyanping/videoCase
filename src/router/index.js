import Vue from 'vue'
import Router from 'vue-router'
import surveyContant from  '@/page/surveyContant'
import login from '@/page/login'
import page1 from '@/page/page1'
import page2 from '@/page/page2'
import page3 from '@/page/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: surveyContant,
      children: [{
        path: '/',
        component: page1
      }, {
        path: '/page2',
        component: page2
      }, {
        path: '/page3',
        component: page3
      }]
    },
    {
      path: '/login',
      component: login
    },
  ]
})

