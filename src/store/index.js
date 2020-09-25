import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName: '',
    sceneName: ''
  },
  mutations: {
    ['cityName'](state, data) {
      state.cityName = data
    },
    ['sceneName'](state, data) {
      state.sceneName = data
    }
  },
  actions: {
    setCityName({
      commit
    }, data) {
      commit('setCityName', data)
    },
    setSceneName({
      commit
    }, data) {
      commit('setSceneName', data)
    }
  }
})
