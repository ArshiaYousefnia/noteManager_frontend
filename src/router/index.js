import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
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

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
