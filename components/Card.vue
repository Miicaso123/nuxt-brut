<template>
  <div class="Card">
    <div
      class="w-[250px] h-[440px] border border-gray-200 p-4 flex flex-col text-center cursor-pointer transition-all duration-300 hover:shadow-2xl"
    >
      <div class="flex justify-between items-start border-b border-gray-200 pb-2 min-h-[60px]">
        <h3 class="text-sm font-semibold text-left">{{ card.name }}</h3>
        <button class="text-gray-500 cursor-pointer flex-shrink-0">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>
      <p class="text-xs text-left mt-1">{{ card.sku }}</p>
      <div class="flex-1 flex items-center justify-center my-2">
        <img :src="card.image" alt="Wine bottle" class="h-48 object-contain" />
      </div>
      <p class="text-xs text-gray-500">{{ card.country }}, {{ card.type }}, {{ card.volume }}</p>
      <p class="text-2xl font-medium mt-2 pt-2 border-t border-gray-200">{{ card.price }} тг</p>

      <div class="flex justify-center items-center mt-2 space-x-2">
        <div
          class="w-[110px] h-[34px] flex justify-center items-center space-x-2 border border-black"
        >
          <button
            @click="cardList.decrementQuantity(card.id)"
            class="px-3 py-1 text-black rounded cursor-pointer"
          >
            <p class="text-xl">-</p>
          </button>
          <span class="px-2 text-gray-900">{{ card.additem }}</span>
          <button
            @click="cardList.incrementQuantity(card.id)"
            class="px-2 py-1 text-black rounded cursor-pointer"
          >
            <p class="text-xl">+</p>
          </button>
        </div>
        <button
          @click="cardList.addToCart(card.id)"
          class="p-2 bg-black w-[110px] h-[34px] flex justify-center cursor-pointer"
        >
          <img class="" src="./../public/images/basket2.svg" alt="basket" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardList } from '@/stores/card';
import type { Card } from '@/stores/card';

defineProps<{
  card: Card;
}>();

const cardList = useCardList();
</script>

<style scoped>
.Card {
  width: 100%;
}
</style>
