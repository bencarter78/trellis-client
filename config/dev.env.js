var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TRELLIS_SERVER_URL: 'http://trellis-server.dev/api'
})
