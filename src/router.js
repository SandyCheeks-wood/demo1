// 1:引入必要的文件
import Vue from 'vue';
import Router from 'vue-router';
import User from '@/components/user/User'

// 2: 加载Router
Vue.use(Router);  //加载全局组件Router

// 3:配置路由实例
export default new Router({
    routes:[{
        path:'/user',
        name:'user',  //给路由命名,设置的name要唯一
        component: User
    },{
        path:'/Page',
        name:'Page',
        component:resolve => require(['@/components/Page'],resolve)
    }]
})
