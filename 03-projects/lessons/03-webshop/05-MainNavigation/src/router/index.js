import { createRouter, createWebHistory } from 'vue-router'
import GitarsListView from '../views/GitarsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guitarsList',
      component: GitarsListView,
    },
  ],
})

export default router
