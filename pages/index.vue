<template>
  <div>
    <BannerSlider />
    <MonthWine/>
    <Stock/>
    <CocktailSet/>
    <HighestRate/>
    <SpecialOffers/>
    <BuyersChoice/>
    <Brands/>
    <AlertInfo/>
  </div>
</template>

<script setup lang="ts">
import BannerSlider from '../components/BannerSlider.vue';
import MonthWine from '../components/MonthWine.vue';
import Stock from '../components/Stock.vue';
import CocktailSet from '../components/CocktailSet.vue';
import HighestRate from '@/components/HighestRate.vue';
import SpecialOffers from '@/components/SpecialOffers.vue';
import BuyersChoice from '@/components/BuyersChoice.vue';
import Brands from '@/components/Brands.vue';
import AlertInfo from '@/components/AlertInfo.vue';
</script>
