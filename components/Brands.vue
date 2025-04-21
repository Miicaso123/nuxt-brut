<template>
  <div v-if="!isMobile" class="py-8">
    <div><h3>БРЕНДЫ</h3></div>
    <div class="py-5 grid grid-rows-2 grid-cols-5 gap-4">
      <div v-for="(item, index) in brand" :key="index">
        <img :src="item.image" alt="brand" />
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="border border-gray-300 w-[90%]"></div>
      <p class="cursor-pointer">показать еще</p>
    </div>
  </div>

  <div v-else class="w-full h-screen">
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="0"
      navigation
      class="h-full w-full"
    >
      <SwiperSlide
        v-for="(item, index) in brand"
        :key="index"
        class="flex items-center justify-center"
      >
        <img :src="item.image" alt="brand" class="object-contain w-full h-full" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});

const brand = ref([
  { image: '/images/brand1.svg' },
  { image: '/images/brand2.svg' },
  { image: '/images/brand3.svg' },
  { image: '/images/brand4.svg' },
  { image: '/images/brand5.svg' },
  { image: '/images/brand6.svg' },
  { image: '/images/brand7.svg' },
  { image: '/images/brand8.svg' },
  { image: '/images/brand9.svg' },
  { image: '/images/brand10.svg' },
]);
</script>

<style scoped>
:deep(.swiper) {
  height: 100vh;
}
:deep(.swiper-slide) {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

:deep(.swiper-button-prev) {
  left: 10px;
}

:deep(.swiper-button-next) {
  right: 10px;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 16px;
  font-weight: bold;
}
</style>
