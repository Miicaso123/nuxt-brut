<template>
  <div class="space-y-4 pt-4">
    <div class="pt-8 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-medium">КОКТЕЙЛЬНЫЕ СЕТЫ</h1>
      </div>
      <div class="border border-gray-300 w-[75%]"></div>
    </div>

    <!-- Desktop -->
    <div v-if="!isMobile" class="flex justify-between cursor-pointer">
      <div
        v-for="(item, index) in sets"
        :key="index"
        class="w-[335px] flex flex-col items-center border border-gray-200 p-4 text-center transition-all duration-300 hover:shadow-2xl"
      >
        <img :src="item.image" :alt="item.title" class="mb-4" />
        <div class="flex flex-col justify-between items-center border-b border-gray-200 pb-4">
          <h3 class="text-sm font-semibold">{{ item.title }}</h3>
          <p class="text-2xl font-medium mt-2">{{ item.price }} тг</p>
        </div>
        <button
          class="my-4 bg-black w-[110px] h-[34px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/basket2.svg" alt="basket" />
        </button>
      </div>
    </div>

    <!-- Mobile swiper -->
    <Swiper
      v-else
      :modules="[Navigation]"
      :slides-per-view="1"
      space-between="10"
      navigation
      class="mySwiper"
    >
      <SwiperSlide v-for="(item, index) in sets" :key="index" class="!flex justify-center">
        <div class="w-[320px] flex flex-col items-center border border-gray-200 p-4 text-center">
          <img :src="item.image" :alt="item.title" class="mb-4" />
          <div class="flex flex-col justify-between items-center border-b border-gray-200 pb-4">
            <h3 class="text-sm font-semibold">{{ item.title }}</h3>
            <p class="text-2xl font-medium mt-2">{{ item.price }} тг</p>
          </div>
          <button class="my-4 bg-black w-[110px] h-[34px] flex justify-center items-center">
            <img src="/images/basket2.svg" alt="basket" />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
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

const sets = ref([
  {
    image: '/images/cocktail1.png',
    title: 'Сет Set of Col de Sasso and Centinel',
    price: '34000',
  },
  {
    image: '/images/cocktail2.png',
    title: 'Сет Set of Col de Sasso and Centinel',
    price: '34000',
  },
  {
    image: '/images/cocktail3.png',
    title: 'Сет Set of Col de Sasso and Centinel',
    price: '34000',
  },
]);
</script>

<style scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: rgba(0, 0, 0, 0.7);
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
