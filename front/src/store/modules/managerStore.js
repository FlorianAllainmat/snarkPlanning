import axios from 'axios';
import connection from '../../helpers/connection'


export default {
state: {
  },
  actions: {
    connectManager({ commit }, { name_manager, password }) {
        return new Promise((resolve, reject) => {
          axios.post(`${connection}managers/connect`, {
              name_manager,
              password
            })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.name_manager
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
      }
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
}
