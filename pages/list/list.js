Page({
  data: {
    data: [],
    pn:0,
    id:'',
    loading:false
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.data.id = options.id;
    this.getList();
  }, 
  getList: function() {
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://apis.juhe.cn/cook/index', 
      data: {
        cid: this.data.id,
        pn: this.data.pn,
        rn: 20,
        key: '503ebcf3da01641830b22ce4209079fc'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        // this.data.loading = false;
        this.setData({
          loading: false
        });
        let tempArr = this.data.data.concat(res.data.result.data);
        this.setData({
          data: tempArr
        });
      }
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  lower:function(e) {
    this.data.pn += 20;
    this.getList();
  },
  goDetail: function(e){
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id
    })
  }
});