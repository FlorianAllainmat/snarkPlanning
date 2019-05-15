import axios from 'axios';
import connection from '../../helpers/connection';
import { SET_COLLABORATER } from '../mutations-type';

export default {
  state: {
    collaborater : []
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
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteCollaborater({ commit }, { id_collaboraters }) {
      axios
        .delete(`${connection}collaboraters/${id_collaboraters}`, {})
        .catch(function (error) {
          console.log(error);
        });
    },
    connectCollaborater({ commit }, {
      name_collaboraters,
      password
    }) {
      axios
        .post(`${connection}connect`, {name_collaboraters, password})
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  mutations: {
    [SET_COLLABORATER](state, collaborater) {
      state.collaborater = collaborater
    }
  },
}
