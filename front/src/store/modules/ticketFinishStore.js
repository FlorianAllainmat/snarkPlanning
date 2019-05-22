import axios from 'axios';
import connection from '../../helpers/connection';
import { SET_TICKETS_FINISH } from '../mutations-type';

export default {
  state: {
    ticketsFinish: []
  },
  actions: {
    callTicketsFinish({ commit }) {
      axios
        .get(`${connection}tickets_finish`)
        .then(r => r.data)
        .then(ticketsFinish => {
          commit('SET_TICKETS_FINISH', ticketsFinish)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    newTicketsFinish({
      commit
    }, {
      collaboraters_id_collaboraters,
      project_id_project,
      nb_ticket,
      week,
    }) {
      axios
        .post(`${connection}tickets_finish`, {
          collaboraters_id_collaboraters,
          project_id_project,
          nb_ticket,
          week,
        })
        .then(ticketsFinish => {
          commit('SET_TICKETS_FINISH', ticketsFinish.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    putTicketsFinish({
      commit
    }, {
      collaboraters_id_collaboraters,
      project_id_project,
      id_tickets_finish,
      nb_ticket,
      week,
    }) {
      axios
        .put(`${connection}tickets_finish/${id_tickets_finish}`, {
          collaboraters_id_collaboraters,
          project_id_project,
          id_tickets_finish,
          nb_ticket,
          week,
        })
        .then(ticketsFinish => {
          commit('SET_TICKETS_FINISH', ticketsFinish.data)
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    deleteLotTickets({
      commit
    }, {
      id_tickets_finish
    }) {
      axios
        .delete(`${connection}tickets_finish/${id_tickets_finish}`, {})
        .then(ticketsFinish => {
          commit('SET_TICKETS_FINISH', ticketsFinish.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mutations: {
    [SET_TICKETS_FINISH](state, ticketsFinish) {
      state.ticketsFinish = ticketsFinish
    },
  },
}
