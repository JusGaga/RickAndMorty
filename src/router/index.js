import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../pages/auth/RegisterPage.vue';
import HomeView from '../pages/HomeView.vue';
import LoginPage from '../pages/auth/LoginPage.vue';
import { useAuthStore } from '../stores/auth.js';
import CharacterList from '../pages/CharacterList.vue';
import NotFoundView from '../pages/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/character',
      component: CharacterList
    },
    {
      path: '/404',
      component: NotFoundView
    }
  ]
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  if (auth.isLogged && (to.path === '/login' || to.path === '/register')) {
    return '/';
  } else if (auth.isLogged) {
    return true;
  } else if (to.path !== '/login' && to.path !== '/register') {
    return '/login';
  }
  return true;
});

export default router;
