<template>
  <header class="w-full py-3">
    <div class="flex flex-wrap items-center justify-between py-3 text-sm container-custom">
      <!-- левая часть -->
      <div class="left-section hidden md:flex flex-wrap items-center gap-6 min-w-0 flex-1">
        <div class="flex items-center space-x-1 min-w-fit">
          <div class="w-4 h-4 shrink-0">
            <img src="./../public/images/navigation.svg" alt="navigation" />
          </div>
          <span class="whitespace-nowrap">Алматы</span>
        </div>

        <div class="text-base leading-6 whitespace-nowrap">
          <span
            :class="{ 'font-bold': languageStore.currentLanguage === 'Ru' }"
            class="cursor-pointer"
            @click="languageStore.setLanguage('Ru')"
          >
            Ru
          </span>
          /
          <span
            :class="{ 'font-bold': languageStore.currentLanguage === 'Kz' }"
            class="cursor-pointer"
            @click="languageStore.setLanguage('Kz')"
          >
            Kz
          </span>
        </div>

        <span class="flex items-center space-x-1 whitespace-nowrap">
          <div class="w-4 h-4 shrink-0">
            <img src="./../public/images/about.svg" alt="about" />
          </div>
          <span>{{ languageStore.translations.header.about }}</span>
        </span>
      </div>

      <!-- логотип и бургер-меню -->
      <div class="flex flex-1 items-center space-x-4">
        <button class="flex items-center space-x-1 md:hidden" @click="toggleMenu">
          <img src="./../public/images/nav-burger.svg" alt="nav-burger">
        </button>
        <img src="./../public/images/title.svg" alt="title" class="" />
      </div>

      <!-- правая часть -->
      <div class="right-section flex items-center justify-end gap-4">
        <div class="search-input relative w-[120px] md:w-[160px]">
          <input
            type="text"
            placeholder="Поиск"
            class="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-100 rounded focus:outline-none"
          />
          <svg
            class="absolute left-2 top-1.5 w-4 h-4 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3a1 1 0 01-1.41 1.41l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
        <div class="flex items-center gap-6">
          <div class="w-5 h-5 shrink-0">
            <img src="./../public/images/heart.svg" alt="heart" />
          </div>
          <div class="w-5 h-5 shrink-0">
            <img src="./../public/images/basket.svg" alt="basket" />
          </div>
          <div class="w-5 h-5 shrink-0">
            <img src="./../public/images/profile.svg" alt="profile" />
          </div>
        </div>
      </div>
    </div>
    <Navbar />
  </header>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
import { useLanguageStore } from './../stores/language';
import { useMenuStore } from './../stores/menu';

const languageStore = useLanguageStore();
const menuStore = useMenuStore();

const toggleMenu = (): void => {
  menuStore.toggleMenu();
};
</script>

<style scoped>
@media (max-width: 768px) {
  .left-section {
    display: none;
  }

  .search-input {
    display: none;
  }
}
</style>
