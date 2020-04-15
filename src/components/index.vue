<template>
    <div class="index">
        <Swiper></Swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper'
export default {
    name: 'index',
    components: { Swiper },
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

<style scoped lang='scss'>
#red {
    color: red;
}
</style>
