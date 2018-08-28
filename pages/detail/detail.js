Page({
  data: {
    data: {}, 
    ingredients:[],
    burden:[],
    loading:false
  },
  setIngredients:function(){
    let ingArr = this.data.data.ingredients.split(';')
    let tempArr = [];
    for (let x in ingArr) {
      tempArr.push({
        name: ingArr[x].split(',')[0],
        value: ingArr[x].split(',')[1],
      })
    }
    this.setData({
      ingredients: tempArr
    })
  },
  setBurden:function(){
    let ingArr = this.data.data.burden.split(';')
    let tempArr = [];
    for (let x in ingArr) {
      tempArr.push({
        name: ingArr[x].split(',')[0],
        value: ingArr[x].split(',')[1],
      })
    }
    this.setData({
      burden: tempArr
    })
  },
  onLoad: function (options) {
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://apis.juhe.cn/cook/queryid', 
      data: {
        id: options.id,
        key: '503ebcf3da01641830b22ce4209079fc'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        this.setData({
          loading: false
        });
        this.setData({
          data: res.data.result.data[0]
        });
        this.setIngredients();
        this.setBurden();
        wx.setNavigationBarTitle({
          title: this.data.data.title
        })
      }
    })
  },
});