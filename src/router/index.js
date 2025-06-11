import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', 
      component: () => import('@/views/Login/LoginPage.vue')
    },
    {
      path: '/register', 
      component: () => import('@/views/Register/RegisterPage.vue')
    },
    {
      path: '/', 
      component: () => import('@/views/Layout/LayoutPage.vue'),
      redirect: '/home',
      children: [
        {path: '/home', component: () => import('@/views/Home/HomePage.vue')},
        {path: '/center', component: () => import('@/views/Center/CenterPage.vue')},
        {path: '/onlinecourse', component: () => import('@/views/OnlineCourse/OnlineCoursePage.vue')},
      ] 
    }
  ],
})

export default router
