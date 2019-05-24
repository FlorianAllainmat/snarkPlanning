import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Interceptor from "./interceptor";

Vue.config.productionTip = false

Interceptor.define(this.$router);

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
