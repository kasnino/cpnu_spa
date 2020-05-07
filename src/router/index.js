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
    path: '/ConsultaRazonSocial',
    name: 'ConsultaRazonSocial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultaRazonSocial.vue')
  },
  {
    path: '/NumeroRadicacion',
    name: 'NumeroRadicacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NumeroRadicacion.vue')
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
  
 
  routes
})

export default router



//   mode: 'history',
  // base: process.env.BASE_URL,
