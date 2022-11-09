// 项目入口-webpack打包从这开始

import Vue from 'vue' // 引入vue源码

// 修改引入的vue文件
// import App from './App.vue' // 引入App.vue文件模块
// import App from './01_插值表达式.vue'
// import App from './02_动态属性.vue'
// import App from './03_事件绑定.vue'
// import App from './04_事件对象.vue'
// import App from './05_事件修饰符.vue'
// import App from './06_键盘修饰符.vue'
// import App from './07_课上练习_翻转世界.vue'
// import App from './08_01_v-model的基本使用.vue'
// import App from './08_02_v-model更多用法.vue'
// import App from './09_v-model的修饰符.vue'
// import App from './10_vue指令_v-text和v-html区别.vue'
// import App from './11_vue指令_v-if和v-show的使用.vue'
// import App from './12_案例_折叠面板.vue'
// import App from './13_v-for使用.vue'
// import App from './附加练习_1.帅哥美女走一走'
// import App from './附加练习_2.加加减减'
// import App from './附加练习_3.购物车'
// import App from './作业1-vue收银机'
import App from './作业2-选择喜欢的'

Vue.config.productionTip = false // 一个控制台打印的提示

new Vue({
    // 实例化Vue(传入配置对象)
    render: (h) => h(App), // 告诉vue渲染什么
}).$mount('#app') // '渲染到哪里
