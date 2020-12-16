import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/footer',
    name: 'footer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Footer.vue')
  },
  {
    path:'/',
    name:'nav',
    component: () => import(/* webpackChunkName: "about" */ '../views/nav.vue')
  },
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
