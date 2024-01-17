import { createRouter, createWebHistory } from "vue-router";

import AppServices from './components/pages/service/AppServices.vue';
import AppHome from './components/pages/home/AppHome.vue';
import AppShop from './components/pages/shop/AppShop.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/services',
            name: 'services',
            component: AppServices
        },
        {
            path: '/shop',
            name: 'shop',
            component: AppShop
        }
    ]
});
export { router };
