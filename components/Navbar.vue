<template>
  <div class="border-b border-t border-gray-200 navbar">
    <div class="container-custom relative">
      <nav class="flex justify-between py-4 text-sm font-medium overflow-x-auto space-x-6">
        <button
          class="items-center space-x-1 burger-toggle md:flex hidden"
          @click="menuStore.toggleMenu"
        >
          <img src="/images/nav-burger.svg" alt="nav-burger" />
        </button>

        <div :class="{ hidden: !menuStore.isMenuOpen }" class="nav-links">
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'wine' }"
            @mouseenter="openDropdown('wine')"
            @click.stop
          >
            <span>{{ languageStore.translations.navbar.wine }}</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'champagne' }"
            @mouseenter="openDropdown('champagne')"
            @click.stop
          >
            <span>{{ languageStore.translations.navbar.champagneandplayfull }}</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'strongdrinks' }"
            @mouseenter="openDropdown('strongdrinks')"
            @click.stop
          >
            <span>{{ languageStore.translations.navbar.strongdrinks }}</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'liquors' }"
            @mouseenter="openDropdown('liquors')"
            @click.stop
          >
            <span>{{ languageStore.translations.navbar.liquorsandbitters }}</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'foodpairings' }"
            @mouseenter="openDropdown('foodpairings')"
            @click.stop
          >
            <span>FOOD PAIRINGS</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'sets' }"
            @mouseenter="openDropdown('sets')"
            @click.stop
          >
            <span>СЕТЫ</span>
          </div>
          <div
            class="nav-item"
            :class="{ active: activeCategory === 'specials' }"
            @mouseenter="openDropdown('specials')"
            @click.stop
          >
            <span>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</span>
          </div>
        </div>
      </nav>
      <NavDropMenu v-if="dropdownStore.isVisible && activeCategory" @click.stop />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from './../stores/language';
import { useMenuStore } from './../stores/menu';
import { useDropdownStore } from './../stores/dropdown';

const languageStore = useLanguageStore();
const menuStore = useMenuStore();
const dropdownStore = useDropdownStore();

const activeCategory = ref<string | null>(null);

const openDropdown = (category: string) => {
  activeCategory.value = category;
  if (category === 'champagne') {
    dropdownStore.fetchDropdownData('ШАМПАНСКОЕ');
  } else if (category === 'wine') {
    dropdownStore.fetchDropdownData('ВИНО');
  } else if (category === 'strongdrinks') {
    dropdownStore.fetchDropdownData('КРЕПКИЕ НАПИТКИ');
  }
};

const closeDropdown = () => {
  activeCategory.value = null;
  dropdownStore.hideDropdown();
};

const handleGlobalClick = (event: MouseEvent) => {
  closeDropdown();
};

onMounted(() => {
  window.addEventListener('click', handleGlobalClick);
});

onUnmounted(() => {
  window.removeEventListener('click', handleGlobalClick);
});
</script>

<style scoped>
span {
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 0;
}

.nav-item {
  position: relative;
  padding: 0 10px;
}

.nav-item span {
  cursor: pointer;
  padding: 5px 0;
  display: inline-block;
}

.nav-item:hover span {
  color: #d4af37;
}

.nav-item.active span {
  color: #d4af37;
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

  .nav-item:hover span {
    color: inherit;
  }
}
</style>
