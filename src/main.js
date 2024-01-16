import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router';
createApp(App).mount('#app')

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app')