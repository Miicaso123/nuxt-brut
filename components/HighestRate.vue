<template>
  <div class="pt-8 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-medium">ВЫСШИЙ РЕЙТИНГ</h1>
    </div>
    <div class="border border-gray-300 w-[75%]"></div>
  </div>
  <CardList :cards="cards"/>
</template>

<script setup lang="ts">
import type { Card } from '@/stores/card';

defineProps<{ cards: Card[] }>();
</script>
