<template>
    <div class="son">
        <h1 class="green" @click="changeTitle">{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: "son",
    data() {
        return {
            title: "点我呀",
            num: 0,
        }
    },
    methods: {
        changeTitle() {
            this.num++;
            this.$emit("titleChanged", this.num);//自定义事件  传递值“子向父组件传值”
        }
    }
}

</script>

<style scoped lang='scss'>
.son {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .green {
        width: 300px;
        height: 50px;
        background-color: green;
        color: white;
        font-size: 20px;
        line-height: 50px;
    }
}
</style>
