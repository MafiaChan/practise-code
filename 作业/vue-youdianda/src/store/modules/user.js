import { getStorageToken, removeStorageToken, setStorageToken } from '@/utils/storage'
import { getUserInfo } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: getStorageToken(),
    userInfo: {}
  },
  mutations: {
    setUserToken (state, payload) {
      state.token = payload
      // 本地存储token
      setStorageToken(payload)
    },
    removeUserToken (state) {
      state.token = ''
      // 本地删除token
      removeStorageToken()
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async actions_setUserInfo (context) {
      const { data: res } = await getUserInfo()
      console.log(res)
      context.commit('setUserInfo', res.data.userInfo)
    }
  },
  getters: {}
}
