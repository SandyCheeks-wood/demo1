<template>
    <div class="slideshow">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img src="@/static/images/source_1.jpeg" alt=""></swiper-slide>
            <swiper-slide><img src="@/static/images/source_2.jpeg" alt=""></swiper-slide>
            <swiper-slide><img src="@/static/images/source_3.jpeg" alt=""></swiper-slide>
            <swiper-slide><img src="@/static/images/source_4.jpeg" alt=""></swiper-slide>
            <swiper-slide><img src="@/static/images/source_5.jpeg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'slideshow',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    height: 300,
                },
                // Some Swiper option/callback...
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    }
}

</script>

<style scoped lang='scss'>
.slideshow{
    width: 600px;
    height: 320px;
}
</style>
