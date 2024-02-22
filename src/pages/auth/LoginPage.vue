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
  <div>
    <h2>Formulaire de connexion</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="user.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model.trim="user.password"
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped></style>
