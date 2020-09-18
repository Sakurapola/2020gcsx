import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerState: ''
  },
  mutations: {
    ['routerState'](state, data) {
      state.routerState = data
    }
  },
  actions: {
    setRouterState({
      commit
    }, data) {
      commit('routerState', data)
    }
  }
})
