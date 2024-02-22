import { defineStore } from 'pinia';
import { getListOfCharacter } from '../services/RickAndMorty.js';

export const useCharacter = defineStore('character', {
  state: () => ({
    filters: {
      pageCount: 0,
      itemsCount: 0,
      currentPage: 1
    },
    data: []
  }),
  getters: {},
  actions: {
    async fetchCharacter() {
      try {
        this.data = await getListOfCharacter();

        console.log(this.data);
      } catch (e) {
        return e;
      }
    }
  }
});
