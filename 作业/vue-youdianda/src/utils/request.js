// 封装axios
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://124.223.14.236:8060/home',
  timeout: 5000
})

export default instance
