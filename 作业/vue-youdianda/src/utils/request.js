// 封装axios
import axios from 'axios'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  baseURL: 'http://124.223.14.236:8060/home',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = store.state.user.token

  if (token) config.headers.token = token
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  if (error.response.status === 401) {
    router.push({
      path: '/login',
      query: {
        back: router.currentRoute.fullPath
      }
    })
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
