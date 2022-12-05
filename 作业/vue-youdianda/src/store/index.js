import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import source from '@/store/modules/source'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://124.223.14.236:8060/'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    source
  },
  strict: process.env.NODE_ENV === 'development'
})
