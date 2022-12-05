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
import EditUser from '@/views/layout/user/editUser'
import store from '@/store'

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
      },
      {
        path: 'user/editUser',
        component: EditUser
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

// 全局的导航守卫 ==> 目标（用户没有登陆，就不能访问设定需要登录后才能访问的页面）
// 需要拦截的页面(需要登录才可以访问到)
const loginURL = ['/user', '/user/edit']
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) {
    next()
  } else {
    // 没有token
    if (loginURL.some((item) => to.path === item)) {
      // if成立，需要登录
      // next('/login') // 提示，导航跳转到/user 失败了，跳转到了/login
      // router.push('/login')
      // 带上回来的地址
      router.push({
        path: '/login',
        query: {
          back: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})

export default router
