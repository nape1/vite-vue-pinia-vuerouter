import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FourNotFour from '../views/404.vue'
import TextElements from '../views/TextElements.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/fournotfour',
      component: FourNotFour
    },
    {
      path:'/textElements',
      component:TextElements
    }
  ]
})

export default router
