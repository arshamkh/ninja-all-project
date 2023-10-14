import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/calculator',
    name:'calculator',
    component:()=>import('../views/calc.vue')
  },
  {
    path:'/music',
    name:'music',
    component:()=>import('../views/music.vue')
  },
  {
    path:'/find',
    name:'find',
    component:()=>import('../views/find.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
