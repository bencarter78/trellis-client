const axios = require('axios')
const config = require('./../../config/dev.env')

export default class {
  constructor () {
    this.client = axios.create({
      baseURL: config.TRELLIS_SERVER_URL,
      headers: {
        'X-CSRF-TOKEN': 'csrfToken',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + localStorage._token
      }
    })
  }

  request (options) {
    return this.client.request(options)
  }

  get (url, options) {
    return this.request({
      method: 'get',
      url: url,
      params: options.params
    })
  }
}
