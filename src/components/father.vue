<template>
    <div class="father">
        <h1>父组件</h1>
        <Son v-on:titleChanged="updateTitle">
        </Son>
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<script>
import son from './common/son'
export default {
    name: 'father',
    components: {
        "Son": son,
    },
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
    background-color: skyBlue;
    .title {
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
