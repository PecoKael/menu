Page({
  data: {
    data: {},
    result: [
    ],
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://apis.juhe.cn/cook/category', 
      data: {
        key: '503ebcf3da01641830b22ce4209079fc'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        this.setData({
          result: res.data.result
        });
      }
    })
  },
  goList: function (e) {
    wx.navigateTo({
      url: '../list/list?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.name
    })
  },
});