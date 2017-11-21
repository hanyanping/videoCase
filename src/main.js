// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './vuex/index'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/reset.css'
// Vue.prototype.a = {}
import 'viewerjs/dist/viewer.css'

// http请求拦截器
// var loadinginstace
axios.interceptors.request.use(config => {
  // element ui Loading方法
  // loadinginstace = ElementUI.Loading.service({ fullscreen: true })
  return config
}, error => {
  // loadinginstace.close()
  ElementUI.Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  // loadinginstace.close()
  if (data.data.rescode == 300) {
    router.push('/')
  }
  return data
}, error => {
  console.log(error)
  // loadinginstace.close()
  ElementUI.Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(axios);

router.beforeEach((to, from, next) => {
  var ajaxUrl = "/boot-pub-survey-manage";
  next()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
});
