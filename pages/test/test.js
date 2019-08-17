//logs.js
import {
  sayHello,
  sayGoodbye
} from "../../utils/module.js"

const url = require("../../config/api")

import {formatDate} from "../../utils/util.js"

const app = getApp()

Page({
  data: {
    info: '',
    position: '',
    userInfo: '',
    array: ["h", "e", "l", "l", "o"],
    view: "APP",
    pageInfoPar:{
      key:'key',
      value:"value"
    },
    descPar:"我是父组件传递过来的数据,我是一个字符串",
    tempName:'我是一个模板，',
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Shang',
      lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon',
      lastName: 'Lin'
    },
    numArr:[1,2,-2,0,'ss',"NaN",3]
  },
  onLoad: function() {
    console.log('生命周期函数--监听页面加载')
    app.globalData.hh = 1
    console.log('app', app)
    console.log('获取api',url)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('生命周期函数--监听页面显示')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('生命周期函数--监听页面隐藏')
    this.setData({
      time:formatDate(new Date())
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('生命周期函数--监听页面卸载')
  },

  testEvent(e) {
    console.log('父级：', e)
  },

  sayHello() {
    sayHello('张飞')
  },
  sayGoodBye() {
    sayGoodbye('张飞')
  },
  getDevice() {
    try {
      const res = wx.getSystemInfoSync()
      console.log('res', res)
      this.setData({
        info: JSON.stringify(res)
      })
    } catch (e) {
      console.log('获取设备信息出错：', e)
    }
  },

  getPos() {
    let _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy

        let data = {
            latitude: latitude,
            longitude: longitude,
            speed: speed,
            accuracy: accuracy
          } 

        _this.setData({
          position:JSON.stringify(data)
        })
      }
    })
  },
  getPhoneNumber(e) {
    console.log('手机信息', e)
    this.setData({
      userInfo: JSON.stringify(e.encryptedData)
    })
  }

})