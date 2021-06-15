import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import scrollInfo from './module/scrollInfo'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    scrollInfo,
    user
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage //选择sessionStorage 进行存储
  })]
})
