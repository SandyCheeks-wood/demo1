import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 报错1:You are using the runtime-only build of Vue where the template compiler is not available. Either pre
// 原因: 参考网址 https://blog.csdn.net/wxl1555/article/details/83187647
// vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置。
// 这是vue升级到2.0之后就有的特点。
// 而我的main.js文件中，初始化vue却是这么写的，这种形式为compiler模式的，所以就会出现上面的错误信息
// new Vue({
//   el: '#app',
//   router,  //不简写就是router:router
//   template: '<App/>',
//   components: { App }
// })

// runtime
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")
