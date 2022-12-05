// 资源请求相关接口封装

import axios from '@/utils/request'

// 获取首页数据
export const getIndexData = () => axios.get('/index/index')

// 获取热点数据
export const getHotData = () => axios.get('/index/hot')

// 获取热门置顶文章数据
export const getHotTopData = (page) => axios.get('/index/new', {
  params: {
    page,
    limit: 20
  }
})
