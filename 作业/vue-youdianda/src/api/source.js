// 资源请求相关接口封装

import axios from '@/utils/request'

// 获取首页数据
export const getIndexData = () => axios.get('/index/index')
