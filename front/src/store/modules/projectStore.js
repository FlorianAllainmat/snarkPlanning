import axios from 'axios';
import connection from '../../helpers/connection'
import { SET_PROJECT } from '../mutations-type';

export default {
  state: {
    project: []
  },
  actions: {
    callProject({commit}) {
      axios
        .get(`${connection}project`)
        .then(r => r.data)
        .then(project => {
          commit('SET_PROJECT', project)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    newProject({
        commit
      }, {
        name,
        id_jira,
        nb_tickets,
        color
      }) {
      axios
        .post(`${connection}project`, {
          name,
          id_jira,
          nb_tickets,
          color
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /* putProject({ commit }, { name, nb_tickets, id_jira, id_project}) {
      axios
        .put(`${connection}project/${id_project}`, {
          name,
          nb_tickets,
          id_jira,
        })
        .catch(function (error) {
          console.log(error);
        });
    }, */
    deleteProject({ commit }, { id_project }) {
      axios
      .delete(`${connection}project/${id_project}`, {
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mutations: {
    [SET_PROJECT] (state, project) {
      state.project = project
    }
  },
}
