import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant'
import 'amfe-flexible'
import '@/assets/font/font-awesome.css'
// 引入全局样式base
import '@/styles/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
