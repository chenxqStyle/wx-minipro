// components/first/first.js
Component({
  properties: {
    desc: {
      type: String,
      value: 'default value',
    },
    pageInfo:{
      type:Object,
      value:{}
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('在组件实例进入页面节点树时执行 - attached')
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log('在组件实例被从页面节点树移除时执行 - detached')
    },
  },

  pageLifetimes:{
    show() {
      console.log('自定义组件 - show')
    },
    hide() {
      console.log('自定义组件 - hide')
    },
  },


  data: {
    // 这里是一些组件内部数据
    selfData: {
      text:"我是组件内部数据"
    }
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },

    emitEven(){
      this.triggerEvent('parEvent', { a: 2 }, { bubbles: true })
    }
  }
})
