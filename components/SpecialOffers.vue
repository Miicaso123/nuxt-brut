<template>
  <div class="py-4 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-medium">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>
    </div>
    <div class="border border-gray-300 w-[65%]"></div>
  </div>

  <div v-if="!isMobile" class="content flex gap-5">
    <div>
      <img src="/images/specialoffers1.png" alt="specialoffers1" />
    </div>
    <div>
      <img src="/images/specialoffers2.png" alt="specialoffers2" />
    </div>
  </div>

  <Swiper
    v-else
    :modules="[Navigation]"
    :slides-per-view="1"
    space-between="10"
    navigation
    class="mySwiper relative"
  >
    <SwiperSlide>
      <img src="/images/specialoffers1.png" alt="specialoffers1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/specialoffers2.png" alt="specialoffers2" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const isMobile = ref(false);

onMounted(() => {
  const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  checkScreen();
  window.addEventListener('resize', checkScreen);

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreen);
  });
});
</script>

<style scoped>
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
