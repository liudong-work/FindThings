var app = getApp(); 

Component({
  
  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },

  /* 组件的属性列表 */
  properties: {
    name: {
      type: String,
      value: 'Car'
    }
  },

  /* 组件的初始数据 */
  data: {
    personName:'',     //姓名 app.globalData.userInfo
    phophoneNum:'',  //手机号
    district:'',   //地区
    districtDetail:'', //详细地址
    
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
   
    },
    moved: function () { 

    },
    detached: function () { 

    },
  },

  /* 组件的方法列表 */
  methods: {
    getInfoBtn:function(){
      var that=this;
      console.log(app.globalData.userInfo);
      that.setData({
        // personName: app.globalData.userInfo.nickName,

      })


    }
  }

  
  
})