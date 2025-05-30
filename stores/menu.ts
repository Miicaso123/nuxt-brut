import { defineStore } from 'pinia';
import { ref } from 'vue';

interface MenuState {
  isMenuOpen: boolean;
}

export const useMenuStore = defineStore('menu', () => {
  const isMenuOpen = ref<boolean>(false);

  const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return { isMenuOpen, toggleMenu };
});
