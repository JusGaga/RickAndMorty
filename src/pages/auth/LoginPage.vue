<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';
import { useRouter } from 'vue-router';

const user = ref({
  email: '',
  password: ''
});

const router = useRouter();
const auth = useAuthStore();
const handleSubmit = () => {
  const { email, password } = user.value;
  if (email && password) {
    if (auth.handleLogin(user)) {
      router.push('/');
    } else {
      console.log("[ERROR] L'authentification à échoué !");
    }
  }
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center h-75">
    <div>
      <h2>Formulaire de connexion</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            v-model.trim="user.email"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model.trim="user.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
