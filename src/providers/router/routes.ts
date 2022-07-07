import { RouteRecordRaw } from "vue-router";
import Home from '@ui/views/Home.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@ui/views/Home.vue'),
    },
    {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "test" */ '@ui/views/Test.vue'),
    }
]