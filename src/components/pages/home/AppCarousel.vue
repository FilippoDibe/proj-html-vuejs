<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Parallax, Pagination, Navigation],
        };
    },
};
</script>

<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :speed="600" :parallax="true" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <div slot="container-start" class="parallax-bg" :style="{
            'background-image':
                'url(https://nexgen.codings.dev/wp-content/uploads/2021/03/bg-parallax.png)',
        }" data-swiper-parallax="-23%"></div>
        <swiper-slide>
            <div class="title" data-swiper-parallax="-300">Slide 1</div>
            <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                </p>
            </div>
        </swiper-slide><swiper-slide>
            <div class="title" data-swiper-parallax="-300">Slide 2</div>
            <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                </p>
            </div>
        </swiper-slide><swiper-slide>
            <div class="title" data-swiper-parallax="-300">Slide 3</div>
            <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style scoped>
.swiper {
    height: 100vh;
    background: #ffffff;
}

.swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
}

.parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 100%;
    -webkit-background-size: cover;
    background-position: center;
    background-size: cover;
}

.swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
}

.swiper-slide .subtitle {
    font-size: 21px;
}

.swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
}
</style>