import { getHotData, getHotTopData, getIndexData } from '@/api/source'

export default {
  namespaced: true,
  state: {
    banner: {},
    hot: {},
    recent: {},
    recentList: {}
  },
  mutations: {
    setBanner (state, payload) {
      state.banner = payload
    },
    setHot (state, payload) {
      state.hot = payload
    },
    setRecent (state, payload) {
      state.recent = payload
    },
    setRecentList (state, payload) {
      state.recentList = payload
    }
  },
  actions: {
    async actions_setBanner (context) {
      const { data: index } = await getIndexData()
      // console.log(index)
      context.commit('setBanner', index.data.banner)
    },
    async actions_setHot (context) {
      const { data: hot } = await getHotData()
      // console.log(hot)
      context.commit('setHot', hot.data.list)
    },
    async actions_setHotData (context, page = 1) {
      const { data: recent } = await getHotTopData(page)
      // console.log(recent)
      context.commit('setRecent', recent.data)
      context.commit('setRecentList', recent.data.list.data)
    }
  },
  getters: {}
}
