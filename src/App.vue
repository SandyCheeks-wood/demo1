<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/image.jpg">
        <HelloWorld msg="首页" />
        <p>
            <router-link to="/user">go to user</router-link>
            <!-- <router-link></router-link> -->
        </p>
        <p>
            <router-link :to="{name:'page'}">go to page</router-link>
        </p>
        <router-view>router-view</router-view>
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
