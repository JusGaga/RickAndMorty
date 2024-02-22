<script setup>
const props = defineProps({ isLoading: Boolean });
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <img
      src="../assets/portal.png"
      alt="portal"
      v-if="props.isLoading"
      class="loader"
      style="height: 1056px"
    />
  </div>
</template>

<style>
.loader {
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
