<script setup>
const props = defineProps({ src: String, title: String });
</script>

<template>
  <div class="card m-2 p-1" style="width: 12rem; background-color: #86c345">
    <img
      :src="props.src"
      class="card-img-top"
      :alt="props.title"
      style="border-radius: 0.375rem"
    />
    <div class="card-body">
      <p class="card-text truncate" style="font-size: 24px">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
