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
