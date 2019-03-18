// var app = getApp();

// Component({

//   /* 开启全局样式设置 */
//   options: {
//     addGlobalClass: true,
//   },

//   /* 组件的属性列表 */
//   properties: {
//     name: {
//       type: String,
//       value: 'Index'
//     }
//   },

//   /* 组件的初始数据 */
//   data: {

//   },

//   /* 组件声明周期函数 */
//   lifetimes: {
//     attached: function () {

//     },
//     moved: function () {

//     },
//     detached: function () {

//     },
//   },

//   /* 组件的方法列表 */
//   methods: {

//   }

// })

const app = getApp()

Page({
  data: {
    currentActive: 0,
    templateList: [
      {
        img: '../images/image1.jpg',
        title: '招领启事'
      },
      {
        img: '../images/image2.jpg',
        title: '寻物启事'
      },
      // {
      //   img: '../images/image3.jpg',
      //   title: '标题3'
      // },
    ]
  },

  changeMoban: function (e) {
    // console.log(e.currentTarget.dataset);
    this.setData({
      currentActive: e.currentTarget.dataset.current
    });
  },
  onLoad: function () {
  }
})