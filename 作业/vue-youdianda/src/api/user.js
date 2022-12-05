// 封装用户部分接口代码
import axios from '@/utils/request'
// 登录
export const userLogin = (mobile, password) =>
  axios.post('/index/login', {
    mobile,
    password
  })

// 注册
export const userRegister = (mobile, password) =>
  axios.post('/index/reg', {
    mobile,
    password
  })

// 获取用户信息
export const getUserInfo = () => axios.get('/user/getUserInfo')

// 修改用户信息
export const updateUserInfo = (userInfo) => axios.post('/user/update', userInfo)
