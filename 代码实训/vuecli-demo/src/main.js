import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Reg from "@/components/reg"
import Step1 from "@/components/step1"
import Step2 from "@/components/step2"
import Step3 from "@/components/step3"
import login from "@/components/login"
import Password from "@/components/password"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/reg",
        component: Reg
    },
    {
        path: '/password',
        component: Password
    },
    {
        path: "/step1",
        component: Step1
    },
    {
        path: "/step2",
        component: Step2
    },
    {
        path: "/step3",
        component: Step3
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
