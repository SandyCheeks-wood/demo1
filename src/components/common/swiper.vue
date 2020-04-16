<template>
    <div class="slideshow">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img src="@/static/images/person_1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="@/static/images/person_2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="@/static/images/person_3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="@/static/images/person_4.jpg" alt=""></swiper-slide>
                            <swiper-slide><img src="@/static/images/person_5.jpg" alt=""></swiper-slide>
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
                },
                loop: true,
                width: 352,
                height: 220,
                autoplay:true,
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        // console.log('Current Swiper instance object', this.swiper)
        // this.swiper.slideTo(1, 1000, true);
    }
}

</script>

<style scoped lang='scss'>
.slideshow .swiper-container {
    width: 352px;
    height: 220px;
    img {
        width: 100%;
    }
}
</style>
