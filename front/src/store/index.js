import Vue from "vue";
import Vuex from "vuex";
import project from './modules/projectStore';
import manager from './modules/managerStore';
import collaborater from './modules/collaboraterStore';
import ticketsProgress from './modules/ticketProgressStore'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project,
    manager,
    collaborater,
    ticketsProgress
  }
});
