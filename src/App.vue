<template>
    <div id="app">
        <!-- 轮播图 -->
        <!-- <slideshow></slideshow> -->
        <!-- 导航栏 -->
        <div class="navBar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    <router-link to="/index">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/flash">快讯</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/search">搜索</router-link>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">用户中心</template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="content center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import './static/css/common.css';
export default {
    name: 'App',
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

// 当前页面
<style scoped lang='scss'>
#app {
    text-align: center;
    position: relative;
    .navBar {
        border-bottom: solid 2px #f3f3f3;
    }
}
</style>

// 全局覆盖
<style lang='scss'>
.el-menu.el-menu--horizontal.el-menu {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.el-menu-item,
.el-submenu__title {
    font-size: 20px;
    color: #000;
}
// .el-menu--horizontal>.el-menu-item.is-active {

// }
.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
