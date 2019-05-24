import Vue from "vue";
import Vuex from "vuex";
import project from './modules/projectStore';
import manager from './modules/managerStore';
import collaborater from './modules/collaboraterStore';
import ticketsProgress from './modules/ticketProgressStore';
import ticketsFinish from './modules/ticketFinishStore';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  modules: {
    project,
    manager,
    collaborater,
    ticketsProgress,
    ticketsFinish
  }
});
