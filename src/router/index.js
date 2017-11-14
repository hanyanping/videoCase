import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import surveyContant from  '@/page/surveyContant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/surveyContant',
      name:'surveyContant',
      component: surveyContant
    }
  ]
})
