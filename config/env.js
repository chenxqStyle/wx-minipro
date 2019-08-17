const ENV = {
  pre: 'pre',
  prod: 'prod'
}

let isDebug =true;

let env = 'pre'

if (isDebug) {
  env = wx.getStorageSync('debugEnv') ? wx.getStorageSync('debugEnv') : env
}

env = ENV[env]
module.exports = env