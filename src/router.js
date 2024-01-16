import { createRouter, createWebHistory } from "vue-router";

import AppServices from './components/pages/AppServices.vue';
import AppHome from './components/pages/AppHome.vue';
import AppShop from './components/pages/AppShop.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
    {
        path:'/',
        name: 'Home',
        components: AppHome
    },
    {
        path:'/services',
        name: 'Services',
        components: AppServices
    },
    {
        path:'/shop',
        name: 'Shop',
        components: AppShop
    }
]
});
export {router};
