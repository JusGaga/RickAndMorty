import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getListOfCharacter } from '../services/RickAndMorty.js';

export const useCharacter = defineStore('character', () => {
  const filter = ref(null);

  const data = ref([]);

  const loading = ref(false);

  function getCharacterList(page = 1) {
    try {
      loading.value = true;
      const request = [getListOfCharacter(page)];
      return Promise.all(request).then((res) => {
        const { results, info } = res[0].data;
        filter.value = info;
        data.value = results;
        loading.value = false;
      });
    } catch (e) {
      console.log(e);
      loading.value = false;
    }
  }

  return { filter, data, loading, getCharacterList };
});
