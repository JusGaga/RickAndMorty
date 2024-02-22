<script setup>
import { onBeforeMount, watch } from 'vue';
import { useCharacter } from '../stores/character.js';
import Card from '../components/CardComponent.vue';
import { ref } from 'vue';
import LoadingState from '../components/LoadingState.vue';
import { VueAwesomePaginate } from 'vue-awesome-paginate';
const character = useCharacter();

onBeforeMount(async () => {
  await character.getCharacterList();
});

const selectedFilter = ref({
  name: null,
  status: null,
  species: null,
  type: null,
  gender: null
});
const currentPage = ref(1);
const onClickHandler = async (page) => {
  await character.getCharacterList(
    selectedFilter.value.name,
    selectedFilter.value.status,
    selectedFilter.value.species,
    selectedFilter.value.type,
    selectedFilter.value.gender,
    page
  );
};

const openFilter = ref(false);
const handleFilter = () => {
  openFilter.value = !openFilter.value;
};

watch(
  selectedFilter,
  async (newFilter) => {
    await character.getCharacterList(
      newFilter.name,
      newFilter.status,
      newFilter.species,
      newFilter.type,
      newFilter.gender
    );
  },
  { deep: true }
);
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="w-25">
      <div @click="handleFilter" style="cursor: pointer">
        <i class="fa-solid fa-filter" />
      </div>

      <div v-if="openFilter">
        <div class="container-filter">
          <div class="searchBar">
            <div class="form-outline" data-mdb-input-init>
              <label for="search">Name</label>
              <input
                type="search"
                id="search"
                class="form-control"
                v-model="selectedFilter.name"
              />
            </div>
          </div>
          <div
            v-for="filter in character.optionsFilter"
            :key="filter.name"
            class="d-flex flex-column m-1"
            :class="filter.name"
          >
            <label :for="filter.name">{{ filter.name }}</label>
            <select
              :name="filter.name"
              :id="filter.id"
              v-model="selectedFilter[filter.name]"
            >
              <option
                :value="subFilter"
                v-for="subFilter in filter.subFilters"
                :key="subFilter"
              >
                {{ subFilter }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoadingState :is-loading="character.loading" />
  <div v-if="!character.loading" class="d-flex flex-column align-items-center">
    <div class="parent div1">
      <Card
        :src="c.image"
        :title="c.name"
        v-for="c in character.data"
        :key="c.id"
      />
    </div>
    <vue-awesome-paginate
      :total-items="character.filter.count"
      :items-per-page="20"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
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

.container-filter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'searchBar searchBar'
    'status species'
    'type gender';
}

.searchBar {
  grid-area: searchBar;
}

.status {
  grid-area: status;
}

.specie {
  grid-area: specie;
}

.type {
  grid-area: type;
}

.gender {
  grid-area: gender;
}
</style>
