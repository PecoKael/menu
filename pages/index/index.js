Page({
  data: {
    inputShowed: false,
    inputVal: "",
    data: [],
  },
  onLoad: function (options) {
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
    let search = this.data.inputVal;
    this.hideInput();
    wx.navigateTo({
      url: '../search/search?search=' + search
    })
  },
  goList: function(e) {
    wx.navigateTo({
      url: '../list/list?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.name
    })
  },
  goCategory: function(e) {
    wx.navigateTo({
      url: '../category/category'
    })
  }
});