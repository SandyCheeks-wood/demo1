// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'

new Vue({
  el:'#app',
  router,  //不简写就是router:router
  template:'<App/>',
  components:{
    App
  }
})
