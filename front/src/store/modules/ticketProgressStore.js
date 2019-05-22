import axios from 'axios';
import connection from '../../helpers/connection';
import { SET_TICKETS_PROGRESS } from '../mutations-type';

export default {
  state: {
    ticketsProgress: []
  },
  actions: {
    callTicketsProgress({ commit }) {
      axios
        .get(`${connection}tickets_progress`)
        .then(r => r.data)
        .then(ticketsProgress => {
          commit('SET_TICKETS_PROGRESS', ticketsProgress)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    newTicketsProgress({ commit }, {
        collaboraters_id_collaboraters,
        project_id_project,
        nb_ticket,
        week,
    }) {
      axios
        .post(`${connection}tickets_progress/`, {
          collaboraters_id_collaboraters,
          project_id_project,
          nb_ticket,
          week,
        })
        .then(ticketsProgress => {
          commit('SET_TICKETS_PROGRESS', ticketsProgress.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    putTicketsProgress({ commit }, {
      collaboraters_id_collaboraters,
      project_id_project,
      id_tickets_progress,
      nb_ticket,
      week,
    }) {
      axios
        .put(`${connection}tickets_progress/${id_tickets_progress}`, {
          collaboraters_id_collaboraters,
          project_id_project,
          id_tickets_progress,
          nb_ticket,
          week,
        })
        .then(ticketsProgress => {
          commit('SET_TICKETS_PROGRESS', ticketsProgress.data)
        })
        .catch(function(error){
          console.log(error)
        })

    },
    deleteLotTickets({ commit }, { id_tickets_progress }) {
      axios
        .delete(`${connection}tickets_progress/${id_tickets_progress}`, {})
        .then(ticketsProgress => {
          commit('SET_TICKETS_PROGRESS', ticketsProgress.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mutations: {
    [SET_TICKETS_PROGRESS](state, ticketsProgress) {
      state.ticketsProgress = ticketsProgress
    },
  },
}
