<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

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
  <div class="bubbles">
    <div class="bubble" v-for="i in 50"></div>
  </div>

  <swiper
    :style="{
      '--swiper-navigation-color': '#21333e',
      '--swiper-pagination-color': '#21333e',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div
      slot="container-start"
      class="parallax-bg"
      :style="{
        'background-image':
          'url(https://nexgen.codings.dev/wp-content/uploads/2021/03/bg-parallax.png)',
      }"
      data-swiper-parallax="-23%"
    ></div>
    <swiper-slide>
      <div
        class="title"
        data-swiper-parallax="-300"
        style="margin-right: 500px"
      >
        <div id="title" class="title" data-swiper-parallax="-300">
          <h1>We Share</h1>
          <h1>
            <span class="title-decor" style="color: #048282; z-index: 1"
              >Good Ideas
            </span>
          </h1>
          <div class="color-block"></div>
        </div>
      </div>
      <div class="subtitle" data-swiper-parallax="-200">
        <p style="margin-right: 440px">
          Escape the comfort zone and achieve better results with the help of
          experts who understeand the subject
        </p>
      </div>
      <div class="text" data-swiper-parallax="-100">
        <a href="" class="btn" style="margin-right: 100px">GET IN TOUCH</a>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="title" data-swiper-parallax="-300">
        <div id="title" class="title" data-swiper-parallax="-300">
          <h1>We Share</h1>
          <h1>
            <span class="title-decor" style="color: #048282; z-index: 1"
              >Good Ideas
            </span>
          </h1>
          <div class="color-block"></div>
        </div>
      </div>
      <div class="subtitle" data-swiper-parallax="-200" style="color: black">
        <p>
          Escape the comfort zone and achieve better results with the help of
          experts who understeand the subject
        </p>
      </div>
      <div class="text" data-swiper-parallax="-100">
        <a href="" class="btn">GET IN TOUCH</a>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="title" data-swiper-parallax="-300" style="margin-left: 300px">
        <div id="title" class="title" data-swiper-parallax="-300">
          <h1>We Share</h1>
          <h1>
            <span class="title-decor" style="color: #048282; z-index: 1"
              >Good Ideas
            </span>
          </h1>
          <div class="color-block"></div>
        </div>
      </div>
      <div class="subtitle" data-swiper-parallax="-200" style="color: black">
        <p style="margin-left: 360px">
          Escape the comfort zone and achieve better results with the help of
          experts who understeand the subject
        </p>
      </div>
      <div class="text" data-swiper-parallax="-100">
        <a href="" class="btn">GET IN TOUCH</a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  height: 100vh;
  background: #ffffff00;
  width: 100%;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 400%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
  color: grey;
}

#title {
  align-self: flex-start;
  position: relative;
  display: flex;
  color: #21333e;
  flex-direction: column;

  h1 {
    font-size: 70px;
    font-weight: 800;
  }

  .title-decor {
    position: relative;
  }

  .color-block {
    width: 430px;
    height: 40px;
    background-color: #c1dadf5e;
    position: absolute;
    left: 0px;
    top: 140px;
  }
}

.btn {
  text-decoration: none;
  background-color: #048282;
  color: white;
  border-radius: 5px;
}

p {
  color: #888c9e;
  width: 500px;
}

.swiper:hover {
  cursor: move;
}

// stile del background con i cubi

$bubble-count: 50;
$sway-type: "sway-left-to-right", "sway-right-to-left";

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function sample($list) {
  @return nth($list, random(length($list)));
}

.bubbles {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bubble {
  position: absolute;
  left: var(--bubble-left-offset);
  bottom: -75%;
  display: block;
  width: var(--bubble-radius);
  height: var(--bubble-radius);
  animation: float-up var(--bubble-float-duration) var(--bubble-float-delay)
    ease-in infinite;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 81%, 0.3);
    border-radius: inherit;
    animation: var(--bubble-sway-type) var(--bubble-sway-duration)
      var(--bubble-sway-delay) ease-in-out alternate infinite;
  }

  @for $i from 0 through $bubble-count {
    &:nth-child(#{$i}) {
      --bubble-left-offset: #{random_range(0vw, 100vw)};
      --bubble-radius: #{random_range(1vw, 10vw)};
      --bubble-float-duration: #{random_range(6s, 12s)};
      --bubble-sway-duration: #{random_range(4s, 6s)};
      --bubble-float-delay: #{random_range(0s, 4s)};
      --bubble-sway-delay: #{random_range(0s, 4s)};
      --bubble-sway-type: #{sample($sway-type)};
    }
  }
}

@keyframes float-up {
  to {
    transform: translateY(-175vh);
  }
}

@keyframes sway-left-to-right {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes sway-right-to-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
