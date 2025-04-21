<template>
  <div class="w-full h-full">
    <div class="flex overflow-x-auto space-x-4 py-4 no-scrollbar">
      <Card v-for="card in cardList.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCardList } from '@/stores/card';
import Card from './Card.vue';

export default defineComponent({
  name: 'CardList',
  components: {
    Card,
  },
  setup() {
    const cardList = useCardList();

    onMounted(() => {
      cardList.initializeProducts();
    });

    return { cardList };
  },
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
