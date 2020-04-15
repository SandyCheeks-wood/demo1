// 1:引入必要的文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import user from './components/user.vue'
import flash from './components/flash.vue'
import index from './components/index.vue'
import search from './components/search.vue'

// 2: 加载Router
Vue.use(VueRouter);  //加载全局组件Router

// const routes = [
//     {
//         path: '/user',
//         name: 'user',  //给路由命名,设置的name要唯一
//         component: user
//     },
//     {
//         path: '/page',
//         name: 'page',  //给路由命名,设置的name要唯一
//         component: page
//     }
// ];

// const router = new VueRouter({
//     routes
// });

// export default router;

// // 3:配置路由实例
export default new VueRouter({
    routes: [{
        path: '/index',
        name: 'index',  //给路由命名,设置的name要唯一
        component: index
    }, {
        path: '/user',
        name: 'user',  //给路由命名,设置的name要唯一
        component: user
    }, {
        path: '/flash',
        name: 'flash',
        component: flash
        // component:resolve => require(['@/components/page'],resolve)
    }, {
        path: '/search',
        name: 'search',  //给路由命名,设置的name要唯一
        component: search
    }]
})
