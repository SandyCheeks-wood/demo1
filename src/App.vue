<template>
    <div id="app">
        <div class="pageCenter">
            <p>
                <router-link to="/user">go to user</router-link>
                <!-- <router-link></router-link> -->
            </p>
            <p>
                <router-link :to="{name:'page'}">go to page</router-link>
            </p>
            <p>
                <router-link to="/index">go to index</router-link>
            </p>
            <p>
                <router-link to="/father">go to father</router-link>
            </p>
            <router-view>router-view</router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    // components: {}
}
</script>

<style scoped lang='scss'>
#app {
    text-align: center;
    .pageCenter {
        width: 1170px;
        background-color: red;
    }
}
</style>
