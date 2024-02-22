<script setup>
import { defineComponent, onMounted } from 'vue';
import { useCharacter } from '../stores/character.js';

defineComponent({
  setup() {
    const useGetCharacter = useCharacter();
    onMounted(() => {
      useGetCharacter.fetchCharacter();
    });
  }
});
</script>

<template>
  <H1>Je suis la home page</H1>
</template>

<style scoped></style>
