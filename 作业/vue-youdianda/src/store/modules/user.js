export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setUserToken (state, payload) {
      state.token = payload
    }
  },
  actions: {},
  getters: {}
}
