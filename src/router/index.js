import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
