<template>
  <div class="pt-8 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-medium">ВИНА МЕСЯЦА</h1>
    </div>
    <div class="border border-gray-300 w-[80%]"></div>
  </div>
  <CardList />
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';
</script>
