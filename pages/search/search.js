Page({
  data: {
    inputShowed: false,
    inputVal: "",
    data: [],
    listShow:-1,
    pn:0,
    loading:false
  },
  onLoad: function (options) {
    this.setData({
      inputShowed: true,
      inputVal: options.search
    })
    this.searchMenu();
  },
  searchMenu: function(){
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://apis.juhe.cn/cook/query.php',
      data: {
        pn:this.data.pn,
        rn:20,
        menu: this.data.inputVal,
        key: '503ebcf3da01641830b22ce4209079fc'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        this.setData({
          loading: false
        });
        if (res.data.resultcode == '200'){
          let tempArr = this.data.data.concat(res.data.result.data);
          this.setData({
            data: tempArr,
            listShow: 1
          });
        }else{
          this.setData({
            data: [],
            listShow: 0
          });
        }
      }
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  inputConfirm: function (e) {
    console.log(111)
    this.setData({
      data: [],
      listShow: -1,
    })
    this.searchMenu();
  },
  lower: function (e) {
    this.data.pn += 20;
    this.searchMenu();
  },
  goDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id
    })
  }
});