import axios from 'axios';
import connection from '../../helpers/connection';
import { SET_COLLABORATER } from '../mutations-type';

export default {
  state: {
    collaborater : [],
    colToken : [],
  },
  actions: {
    callCollaborater({ commit }) {
      axios
        .get(`${connection}collaboraters`)
        .then(r => r.data)
        .then(collaborater => {
          commit('SET_COLLABORATER', collaborater)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    newCollaborater({ commit }, { name_collaboraters, password }) {
      axios
        .post(`${connection}collaboraters/create`, {
          name_collaboraters,
          password
        })
        .then(collaborater => {
          commit('SET_COLLABORATER', collaborater.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    connectCollaborater({ commit }, { name_collaboraters, password }) {
      return new Promise((resolve, reject) => {
        axios.post(`${connection}collaboraters/connect`, {
          name_collaboraters,
          password
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.name_collaboraters
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
    },
    deleteCollaborater({ commit }, { id_collaboraters }) {
      axios
        .delete(`${connection}collaboraters/${id_collaboraters}`, {})
        .then(collaborater => {
          commit('SET_COLLABORATER', collaborater.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mutations: {
    [SET_COLLABORATER](state, collaborater) {
      state.collaborater = collaborater
    },
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
