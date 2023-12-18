import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'
import ListView from '../views/ListView.vue'
import FormCreate from '../views/FormCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user-card',
      name: 'user-card',
      component: CardView
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: ListView
    },
    {
      path: '/user-create',
      name: 'user-create',
      component: FormCreate
    },
  ]
})

export default router
