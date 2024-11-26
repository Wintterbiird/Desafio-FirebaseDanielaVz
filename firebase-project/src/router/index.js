import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged, auth } from '@/auth';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { login: true }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue'),
      meta: { login: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { login: false }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.login;
  if (requiredAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next(); 
      } else {
        next('/login');
        router.push('/login');
      }
    });
  } else {
    next();
  }
})

export default router;