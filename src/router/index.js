import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Newayuda = { template: '<div>Ayuda</div>'}
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
    path: '/newayuda',
    name: 'Newayuda',
    beforeEnter() {

      location.href = 'https://www.ramajudicial.gov.co/portal/politicas-de-privacidad-y-condiciones-de-uso';
      location.target = "_blank"

    },
    component: Newayuda,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
