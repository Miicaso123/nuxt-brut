<template>
  <div class="wine-slider">
    <swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      :slides-per-view="1"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      class="swiper-container"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Banner Slide" class="slide-image" />
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'WineSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref(['/images/banner.png', '/images/banner.png', '/images/banner.png']);

    return {
      images,
      modules: [Pagination, Autoplay, Navigation],
    };
  },
});
</script>

<style scoped>
.wine-slider {
  position: relative;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  gap: 20px; 
  padding-bottom: 10px;
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.7;
  width: 10px;
  height: 10px;
  margin: 0; 
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff4d4d;
  opacity: 1;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #fff;
  width: 40px;
  height: 40px;
}

:deep(.swiper-button-prev) {
  left: 20px;
}

:deep(.swiper-button-next) {
  right: 20px;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 20px;
}
</style>
