import { defineStore } from 'pinia';

interface FilterGroup {
  [key: string]: string[];
}

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    filters: {} as FilterGroup,
    isVisible: false,
  }),

  actions: {
    async fetchDropdownData(category: string) {
      if (category === 'ШАМПАНСКОЕ') {
        this.filters = {
          Тип: ['Ламбруско', 'Шампанское', 'Просекко', 'Асти', 'Креман', 'Всё →'],
          Цвет: ['Белое', 'Красное', 'Розовое'],
          Сахар: ['Брут', 'Полусухое', 'Сухое', 'Полусладкое', 'Сладкое', 'Ещё →'],
          Бренд: ['Lanson', 'Louis Roederer', 'Canti', 'Ca’del Bosco', 'Brut Dargent', 'Ещё →'],
          Цена: [
            'До 5000 тг',
            '5000 - 10000 тг',
            '10000 - 15000 тг',
            '15000 - 20000 тг',
            '25000 - 30000 тг',
            'Ещё →',
          ],
        };
      } else if (category === 'ВИНО') {
        this.filters = {
          Тип: ['Красное', 'Белое', 'Розовое', 'Всё →'],
          Сахар: ['Сухое', 'Полусухое', 'Полусладкое', 'Сладкое', 'Ещё →'],
          Бренд: ['Château Margaux', 'Opus One', 'Sassicaia', 'Ещё →'],
          Цена: ['До 5000 тг', '5000 - 10000 тг', '10000 - 15000 тг', '15000 - 20000 тг', 'Ещё →'],
        };
      } else if (category === 'КРЕПКИЕ НАПИТКИ') {
        this.filters = {
          Тип: ['Водка', 'Виски', 'Коньяк', 'Ром', 'Всё →'],
          Бренд: ['Beluga', 'Macallan', 'Hennessy', 'Ещё →'],
          Цена: ['До 5000 тг', '5000 - 10000 тг', '10000 - 15000 тг', 'Ещё →'],
        };
      }

      this.isVisible = true;
    },

    hideDropdown() {
      this.isVisible = false;
    },
  },
});
