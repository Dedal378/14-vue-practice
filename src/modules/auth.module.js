import axios from 'axios'
const TOKEN_KEY = 'jwt-token'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    },
  },
  actions: {
    async login({ commit }, payload) {
      // commit('setToken', payload)
      console.log(payload)
    },
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
  },

}
