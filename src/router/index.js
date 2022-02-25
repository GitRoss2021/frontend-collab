import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Appliances from '../views/Appliances.vue'
import Accessories from '../views/Accessories.vue'
import Cellphones from '../views/Cellphones.vue'
import Television from '../views/Television.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/appliances',
    name: 'Appliances',
    component: Appliances
  },
  {
    path: '/cellphones',
    name: 'Cellphones',
    component: Cellphones
  },
  {
    path: '/television',
    name: 'Television',
    component: Television
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
