const ENV = require('./env')
const hostPre = require('./pre-host').host
const hostProd = require('./prod-host').host
const host = {
  pre: hostPre,
  prod: hostProd,
}
module.exports = host[ENV]