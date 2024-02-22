import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getListOfCharacter } from '../services/RickAndMorty.js';
import { FILTER } from '../constants/optionsFilter.js';

export const useCharacter = defineStore('character', () => {
  const filter = ref(null);

  const data = ref([]);

  const loading = ref(false);

  const optionsFilter = ref(FILTER);

  function getCharacterList(
    name = null,
    status = null,
    species = null,
    type = null,
    gender = null,
    page = 1
  ) {
    try {
      loading.value = true;
      const request = [
        getListOfCharacter(name, status, species, type, gender, page)
      ];
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

  return { filter, data, loading, optionsFilter, getCharacterList };
});
