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
  <div class="d-flex justify-content-center align-items-center h-75">
    <div>
      <h2>Formulaire d'inscription</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username" class="form-label">Username:</label>
          <input
            type="text"
            id="username"
            v-model.trim="newUser.username"
            class="form-control"
            required
          />
        </div>
        <div>
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            v-model.trim="newUser.email"
            required
            class="form-control"
          />
        </div>
        <div>
          <label for="password" class="form-label">Password:</label>
          <input
            type="password"
            id="password"
            v-model.trim="newUser.password"
            required
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
