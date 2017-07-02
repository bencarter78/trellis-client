import Vue from 'vue'
import App from './App'
import router from './router'

require('./components')

Vue.config.productionTip = false

window.axios = require('axios')
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = 'csrfToken'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
