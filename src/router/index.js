import Vue from 'vue'
import VueRouter from 'vue-router'
import GuessPokemon from '../views/GuessPokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guess-pokemon',
    component: GuessPokemon
  },
  {
    path: '/rules',
    name: 'rules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
