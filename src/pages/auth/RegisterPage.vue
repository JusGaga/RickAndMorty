<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';
import { useRouter } from 'vue-router';

const newUser = ref({
  username: '',
  email: '',
  password: ''
});

const regexEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const auth = useAuthStore();
const router = useRouter();
const handleSubmit = () => {
  const { email, username, password } = newUser.value;
  const isAlreadyUsedEmail = JSON.parse(localStorage.getItem('UserList'))?.find(
    (user) => user.email === email
  );
  if (!isAlreadyUsedEmail) {
    if (email && username && password) {
      if (regexEmail.test(email) && regexPassword.test(password)) {
        auth.handleRegister(newUser);
        router.push('/login');
      }
    }
  } else {
    console.log("[ERROR] L'email est déjà utilisé");
  }
};
</script>

<template>
  <div>
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model.trim="newUser.username"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="newUser.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model.trim="newUser.password"
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped></style>
