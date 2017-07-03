import Vue from 'vue'
import App from './App'
import router from './router'

require('./components')
const config = require('./../config/dev.env')

Vue.config.productionTip = false

window.axios = require('axios')
window.axios.baseURL = config.TRELLIS_SERVER_URL
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = 'csrfToken'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage._token

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
