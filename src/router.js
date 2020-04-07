// 1:引入必要的文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import user from './components/user/user.vue'
import page from './components/page.vue'

// 2: 加载Router
Vue.use(VueRouter);  //加载全局组件Router

const routes = [
    {
        path: '/user',
        name: 'user',  //给路由命名,设置的name要唯一
        component: user
    },
    {
        path: '/page',
        name: 'page',  //给路由命名,设置的name要唯一
        component: page
    }
];

const router = new VueRouter({
    routes
});

export default router;

// // 3:配置路由实例
// export default new Router({
//     routes:[{
//         path:'/user',
//         name:'user',  //给路由命名,设置的name要唯一
//         component: user
//     },{
//         path:'/page',
//         name:'page',
//         component:resolve => require(['@/components/page'],resolve)
//     }]
// })
