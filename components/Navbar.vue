<template>
  <div class="border-b border-t border-gray-200 navbar">
    <div class="container-custom">
      <nav class="flex justify-between py-4 text-sm font-medium overflow-x-auto space-x-6">
        <button
          class="flex items-center space-x-1 burger-toggle md:flex hidden"
          @click="menuStore.toggleMenu"
        >
          <img src="./../public/images/nav-burger.svg" alt="nav-burger" />
        </button>

        <div :class="{ hidden: !menuStore.isMenuOpen }" class="nav-links">
          <span>{{ languageStore.translations.navbar.wine }}</span>
          <span>{{ languageStore.translations.navbar.champagneandplayfull }}</span>
          <span>{{ languageStore.translations.navbar.strongdrinks }}</span>
          <span>{{ languageStore.translations.navbar.liquorsandbitters }}</span>
          <span>FOOD PAIRINGS</span>
          <span>СЕТЫ</span>
          <span>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from './../stores/language';
import { useMenuStore } from './../stores/menu';

const languageStore = useLanguageStore();
const menuStore = useMenuStore();
</script>

<style scoped>
span {
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
}

@media (max-width: 767px) {
  .nav-links.hidden {
    display: none;
  }

  .navbar {
    border-top: none;
  }
}
</style>
