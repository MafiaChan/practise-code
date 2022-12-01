import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入一级路由
import Layout from '@/views/layout'
import Login from '@/views/login'
import NotFound from '@/views/404'
// 导入二级路由
import Home from '@/views/layout/home'
import Edit from '@/views/layout/edit'
import Apps from '@/views/layout/apps'
import User from '@/views/layout/user'
import Applist from '@/views/layout/apps/applist'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'apps',
        component: Apps,
        children: [
          {
            path: 'applist',
            component: Applist
          }
        ]
      },
      {
        path: 'edit',
        component: Edit
      },
      {
        path: 'user',
        component: User
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: () => import('@/views/register')
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
