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

// 上传图片接口
export const uploadImage = (fd) => axios.post('/common/upload?type=images', fd)

// 获取用户点赞文章列表
export const getLikeList = (page) => axios.get('/user/userDataList?type=1', {
  params: {
    page,
    limit: 20
  }
})

// 获取用户收藏文章列表
export const getCollectList = (page) => axios.get('/user/userDataList?type=2', {
  params: {
    page,
    limit: 20
  }
})

// 获取用户文章列表
export const getUserArticleList = (page) => axios.get('/user/myArticle', {
  params: {
    page,
    limit: 20
  }
})

// 发表文章
export const publishArticle = (article) => axios.post('/user/addArticle', article)
