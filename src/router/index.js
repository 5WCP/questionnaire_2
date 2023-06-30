import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Front',
      component: () => import("../views/Front.vue")
    },
    {
      path: '/back',
      name: 'Back',
      component: () => import("../views/Back.vue")
    },
    {
      path: '/editTopicView',
      name: 'EditTopicView',
      component: () => import("../views/EditTopicView.vue")
    }
  ]
})

export default router
