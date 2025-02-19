import { createRouter, createWebHistory } from 'vue-router'
import HomeModule from '@/modules/home/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...HomeModule,

    { path: '/404', component: () => import('@/components/PageNotFound.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
  ],
})

export default router
