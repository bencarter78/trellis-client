const jwt = require('jwt-decode')
const moment = require('moment')

export default {
  check () {
    return moment.now() >= jwt(localStorage._token).exp
  }
}
