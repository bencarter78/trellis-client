const jwt = require('jwt-decode')
const moment = require('moment')

export default {
  check () {
    return localStorage._token && moment.now() < moment(jwt(localStorage._token).exp, 'X')
  }
}
