<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/image.jpg">
        <HelloWorld msg="首页" />
        <p>
            <router-link to="/user">/user/foo</router-link>
            <!-- <router-link to="/user/bar">/user/bar</router-link> -->
        </p>
        <router-view>PS:写在这里,即router-view里的内容是不会显示在页面上的!</router-view>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
