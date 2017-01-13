//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    ajax: function (types, index, self,data) {
      //请求数据
      wx.request({
        url: 'http://route.showapi.com/819-1',
        data: {
          "showapi_appid": "28337",
          "showapi_sign": "fd70204f4b9542fa9c564c437b233036",
          type: types,
          page: index
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          if (res && res.data.showapi_res_code == 0) {
           
            var data = res.data.showapi_res_body;
           
            self.setData({ dataList: data })
          }

        }
      })


    }
  }
})