<template>
    <div class="father">
        <h1>父组件</h1>
        <h2 class="title">{{title}}</h2>
        <Son v-on:titleChanged="updateTitle">
        </Son>
    </div>
</template>

<script>
import son from './common/son'
export default {
    name: 'search',
    components: { "Son": son, },
    data() {
        return {
            title: '子组件传递的值在这里'
        }
    },
    methods: {
        updateTitle(e) {
            this.title = e;
        }
    }
}

</script>

<style scoped lang='scss'>
.father {
    width: 800px;
    height: 200px;
    text-align: center;
    box-sizing: border-box;
    border: solid 2px skyblue;
    position: relative;
    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        box-sizing: border-box;
        border: solid 2px red;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
