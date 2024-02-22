import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';

import VueAwesomePaginate from 'vue-awesome-paginate';
import 'vue-awesome-paginate/dist/style.css';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate);

app.mount('#app');
