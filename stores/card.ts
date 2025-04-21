import { defineStore } from 'pinia';

export interface Card {
  id: number;
  name: string;
  year: number;
  sku: string;
  image: string;
  country: string;
  type: string;
  volume: string;
  price: number;
  quantity: number;
}

export const useCardList = defineStore('card', {
  state: () => ({
    cards: [] as Card[],
  }),

  actions: {
    initializeProducts() {
      this.cards = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: 'Вино Chianti Castiglioni, Frescobaldi',
        year: 2019,
        sku: '56955',
        image: '/images/cardwine.svg',
        country: 'Италия',
        type: 'белое сухое',
        volume: '1л',
        price: 34000,
        quantity: 2,
      }));
    },

    incrementQuantity(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card) {
        card.quantity += 1;
      }
    },

    decrementQuantity(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card && card.quantity > 1) {
        card.quantity -= 1;
      }
    },

    addToCart(cardId: number) {
      const card = this.cards.find((p) => p.id === cardId);
      if (card) {
        console.log(`${card.name} добавлен в корзину с количеством ${card.quantity}`);
      }
    },
  },
});
