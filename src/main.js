import Vue from 'vue'
import App from './App'
import router from './router'
import Client from './http/client'

require('./components')
// const axios = require('axios')

Vue.config.productionTip = false
Vue.prototype.$http = new Client()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
