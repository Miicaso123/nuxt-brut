<template>
  <div>
    <BannerSlider />
    <MonthWine :cards="cardList.cards" />
    <Stock />
    <CocktailSet />
    <HighestRate :cards="cardList.cards" />
    <SpecialOffers />
    <BuyersChoice :cards="cardList.cards" />
    <Brands />
    <AlertInfo />
    <MapLocation />
  </div>
</template>

<script setup lang="ts">
import { useCardList } from '@/stores/card';

const cardList = useCardList();

onMounted(() => {
    cardList.initializeProducts().then(() => {
  });
});
</script>
