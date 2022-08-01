import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasksPage',
      component: () => import('@/views/tasksList.vue')
    },
    {
      path: '/task',
      name: 'taskPage',
      component: () => import('@/views/taskPage.vue')
    }
  ]
})

export default router
