Component({

  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示modal
    show: {
      type: Boolean,
      value: false
    },
    //modal的高度
    height: {
      type: String,
      value: '50%'
    },
    title: {
      type: String,
      value: '弹窗'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    cancel() {
      this.setData({ show: false })
      this.triggerEvent('cancel')
    },

    confirm(e) {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      // this.setData({ show: false })
      this.triggerEvent('confirm', myEventDetail,myEventOption)
    }
  }
})