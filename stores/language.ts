import { defineStore } from 'pinia';

interface Translations {
  header: {
    about: string;
  };
  navbar: {
    wine: string;
    champagneandplayfull: string;
    strongdrinks: string;
    liquorsandbitters: string;
  };
}

const translations: Record<'Ru' | 'Kz', Translations> = {
  Ru: {
    header: {
      about: 'О компании',
    },
    navbar: {
      wine: 'Вино',
      champagneandplayfull: 'ШАМПАНСКОЕ И ИГРИСТОЕ',
      strongdrinks: 'КРЕПКИЕ НАПИТКИ',
      liquorsandbitters: 'ЛИКЁРЫ И БИТТЕРЫ'
    },
  },
  Kz: {
    header: {
      about: 'Компания туралы',
    },
    navbar: {
      wine: 'Шарап',
      champagneandplayfull: 'ШАМПАН ЖӘНЕ ЖАРҚЫРАҒАН ШАРАП',
      strongdrinks: 'КҮШТІ СУСЫНДАР',
      liquorsandbitters: 'ЛИКЕРЛЕР МЕН АЩЫ'
    },
  },
};

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'Ru' as 'Ru' | 'Kz',
  }),
  getters: {
    translations(state): Translations {
      return translations[state.currentLanguage];
    },
  },
  actions: {
    setLanguage(lang: 'Ru' | 'Kz') {
      this.currentLanguage = lang;
    },
  },
});
