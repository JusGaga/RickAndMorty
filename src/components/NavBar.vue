<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt="RickAndMortySvg"
          style="width: 20rem"
        />
      </a>

      <div class="d-flex align-items-center ps-5" v-if="auth.isLogged">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" class="btn btn-primary mx-2">Accueil</a>
            <a href="/character" class="btn btn-primary mx-2">Personnage</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-2 text-end pe-5" v-if="!auth.isLogged">
      <a href="/login" class="btn btn-outline-primary me-2">Se connecter</a>
      <a href="/register" class="btn btn-primary">S'enregistrer</a>
    </div>
    <div class="col-2 text-end pe-5" v-if="auth.isLogged">
      <a href="#" @click="logout" class="btn btn-outline-primary me-2"
        >Déconnexion</a
      >
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '../stores/auth.js';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const logout = () => {
  auth.handleLogout();
  router.push('/login');
};
</script>
