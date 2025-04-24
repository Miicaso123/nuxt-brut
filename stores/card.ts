import { defineStore } from 'pinia';
import axios from 'axios';

export interface Card {
  id: number;
  name: string;
  sku: string;
  image: string;
  country: string;
  type: string;
  volume: string;
  price: number;
  additem: number;
}

export const useCardList = defineStore('card', {
  state: () => ({
    cards: [] as Card[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async initializeProducts() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('https://brut.kz/api/products/recommended');

        this.cards = response.data.products.map((product: any) => {
          const countryAttr = product.attributes.find((attr: any) => attr.name === 'Страна');
          const colorAttr = product.attributes.find((attr: any) => attr.name === 'Цвет');
          const sugarAttr = product.attributes.find((attr: any) => attr.name === 'Сахар');
          const typeAttr = product.attributes.find((attr: any) => attr.name === 'Тип');
          const volumeAttr = product.attributes.find((attr: any) => attr.name === 'Объем');

          let type = '';
          if (typeAttr) {
            type = typeAttr.values[0]?.name || 'Не указано';
          } else if (colorAttr && sugarAttr) {
            type = `${colorAttr.values[0]?.name || ''} ${sugarAttr.values[0]?.name || ''}`.trim();
          } else if (colorAttr) {
            type = colorAttr.values[0]?.name || 'Не указано';
          }

          return {
            id: product.id,
            name: product.name,
            sku: product.sku || 'N/A',
            image: product.image || '/images/default-wine.svg',
            country: countryAttr?.values[0]?.name || 'Не указано',
            type: type,
            volume: volumeAttr?.values[0]?.name || 'N/A',
            price: product.price || 0,
            additem: product.additem || 1,
          };
        });
      } catch (error) {
        this.error = 'Failed to fetch products';
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    incrementQuantity(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card) {
        card.additem += 1;
      }
    },

    decrementQuantity(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card && card.additem > 1) {
        card.additem -= 1;
      }
    },

    addToCart(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card) {
        console.log(`${card.name} добавлен в корзину с количеством ${card.additem}`);
      }
    },
  },
});
