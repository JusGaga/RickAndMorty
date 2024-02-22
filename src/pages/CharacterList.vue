<script setup>
import { onBeforeMount } from 'vue';
import { useCharacter } from '../stores/character.js';
import Card from '../components/CardComponent.vue';
import { ref } from 'vue';
import LoadingState from '../components/LoadingState.vue';
import { VueAwesomePaginate } from 'vue-awesome-paginate';
const character = useCharacter();

onBeforeMount(async () => {
  await character.getCharacterList();
});

const onClickHandler = async (page) => {
  await character.getCharacterList(page);
};

const currentPage = ref(1);
</script>

<template>
  <LoadingState :is-loading="character.loading" />
  <div v-if="!character.loading" class="d-flex flex-column align-items-center">
    <vue-awesome-paginate
      :total-items="character.filter.count"
      :items-per-page="20"
      :max-pages-shown="5"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
    <div class="parent div1">
      <Card
        :src="c.image"
        :title="c.name"
        v-for="c in character.data"
        :key="c.id"
      />
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr) 0;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 5 / 6;
}
</style>
