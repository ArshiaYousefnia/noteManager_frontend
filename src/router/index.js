import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Login from "@/views/Login.vue";

const routes = [
    { path: '/login', name: 'Login', component: Login },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }  // mark as protected
    },
    { path: '/', redirect: '/dashboard' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('access_token')

    if (!isAuthenticated && to.meta.requiresAuth) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
