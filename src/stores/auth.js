import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('form', () => {
  const user = ref(JSON.parse(localStorage.getItem('User')) || null);
  const userList = JSON.parse(localStorage.getItem('UserList'));

  const isLogged = computed(() => !!user.value);

  function handleRegister(newUser) {
    const { username, email, password } = newUser.value;
    let updatedUserList = userList ? [...userList] : [];

    updatedUserList.push({
      username: username,
      email: email,
      password: password
    });

    localStorage.setItem('UserList', JSON.stringify(updatedUserList));
  }

  function handleLogin(userWantConnected) {
    const { email, password } = userWantConnected.value;
    const searchUser = userList.find((user) => user.email === email);

    if (searchUser && searchUser.password === password) {
      const { username } = searchUser;
      user.value = { username, email };
      localStorage.setItem('User', JSON.stringify({ username, email }));
      return true;
    }
    return false;
  }

  function handleLogout() {
    localStorage.removeItem('User');
  }

  return { user, isLogged, handleRegister, handleLogin, handleLogout };
});
