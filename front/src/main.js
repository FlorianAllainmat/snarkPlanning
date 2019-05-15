import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { Chrome } from 'vue-color'

Vue.config.productionTip = false

Vue.use(Chrome)

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
