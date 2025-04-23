<template>
  <div class="w-full h-full">
    <div
      ref="scrollContainer"
      class="flex overflow-x-auto space-x-4 py-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
    >
      <Card v-for="card in cardList.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardList } from '@/stores/card';
import { useEventListener } from '@vueuse/core';

const cardList = useCardList();
const scrollContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  cardList.initializeProducts();

  const el = scrollContainer.value;
  if (!el) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  useEventListener(el, 'mousedown', (e) => {
    isDown = true;
    el.classList.add('dragging');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  useEventListener(el, 'mouseleave', () => {
    isDown = false;
    el.classList.remove('dragging');
  });

  useEventListener(el, 'mouseup', () => {
    isDown = false;
    el.classList.remove('dragging');
  });

  useEventListener(el, 'mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  });

  useEventListener(el, 'touchstart', (e: TouchEvent) => {
    startX = e.touches[0].pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  useEventListener(el, 'touchmove', (e: TouchEvent) => {
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  });
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

.cursor-grab {
  cursor: grab;
}

.active\:cursor-grabbing:active {
  cursor: grabbing;
}
</style>
