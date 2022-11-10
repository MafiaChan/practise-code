import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

// 练习的时候，更换导入的App.vue 文件，方便学习
// import App from './App.vue'
// import App from './01_v-for更新监测.vue'
// import App from './02_更新监测.vue'
// import App from './03_key作用.vue'
// import App from './04_动态class.vue'
// import App from './05_动态style.vue'
// import App from './06_案例_品牌管理_铺设.vue'
// import App from './07_案例_品牌管理_添加.vue'
// import App from './08_案例_品牌管理_删除.vue'
// import App from './09_vue_过滤器.vue'
// import App from './10_过滤器_更多用法.vue'
// import App from './11_案例_品牌管理_时间过滤器.vue'
// import App from './12_vue_计算属性.vue'
// import App from './13_计算属性_缓存.vue'
// import App from './14_案例_品牌管理_总价和均价.vue'
// import App from './15_计算属性_完整写法.vue'
// import App from './16_案例_全选和反选.vue'
// import App from './17_侦听器_基础使用.vue'
// import App from './18_侦听器_深度侦听.vue'
// import App from './19_案例_品牌管理_数据本地存储'
// import App from "./附加练习_1.选你爱我求和"
// import App from "./附加练习_2.买点书学习"
// import App from "./作业1_导航栏"
import App from "./作业2_学生信息表"

Vue.config.productionTip = false

// todo ============= 方式1: 全局 - 过滤器 =============
// 任意的.vue文件内"直接"使用
// 语法: Vue.filter("过滤器名", 值 => 处理结果)
Vue.filter('reverse', (val, s) => val.split('').reverse().join(s))

// todo ============= 过滤器接参数 =============

new Vue({
    render: (h) => h(App),
}).$mount('#app')
