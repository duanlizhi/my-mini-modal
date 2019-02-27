const app = getApp()

Page({
  data: {
    isShow: false,
  },
  onLoad: function() {
   
  },
  //点击确定按钮回调事件
  confirm: function(e) {
    console.log('confirm', e)
    this.setData({
      isShow: false
    })
  },
  //点击取消按钮回调事件
  cancle: function(e) {
    console.log('cancle', e)
  },
  showModal: function() {
    this.setData({
      isShow: true
    })
  },
  oldPassInput: function(e) {
    console.log('监听旧密码输入:',e)
  },
  newPassInput: function(e) {
    console.log('监听新密码输入:',e)
  },
  confirmPassInput: function(e) {
    console.log('监听确认密码输入:', e)
  },
  confirmPass: function(e) {
    console.log('确认密码输入框失去焦点:', e)
  }
})