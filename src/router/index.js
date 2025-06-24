import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

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
        {path: '/coursedetails', component: () => import('@/views/CourseDetails/CourseDetailsPage.vue')},
        {path: '/checkdetails', component: () => import('@/views/CheckDetails/CheckDetailsPage.vue')},
        {path: '/checkhomework', component: () => import('@/views/CheckHomework/CheckHomeworkPage.vue')},
        {path: '/entercourse', component: () => import('@/views/EnterCourse/EnterCoursePage.vue')},
        {path: '/dock', component: () => import('@/views/TeachDock/TeachDockPage.vue')},
      ] 
    }
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const { userInfo } = storeToRefs(userStore)
  // 允许访问登录页
  if (to.path === '/login') {
    return next()
  }
  // 没有 userInfo 时强制跳转到登录页
  if (!userInfo.value) {
    return next('/login')
  }
  next()
})

export default router
