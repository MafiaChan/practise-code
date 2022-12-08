import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant'
import 'amfe-flexible'
import '@/assets/font/font-awesome.css'
// 引入全局样式base
import '@/styles/base.less'

// 全局引入moment
import moment from 'moment'

// 时间中文本地化
moment.locale('zh-cn')

// 定义全局过滤器
Vue.filter('fromNow', time => moment(time).fromNow())

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
