import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RecetaElectronica from '../views/RecetaElectronica.vue'
import SoporteTecnico from '../views/SoporteTecnico.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/receta-electronica',
    name: 'RecetaElectronica',
    component: RecetaElectronica
  },
  {
    path: '/soporte-tecnico',
    name: 'SoporteTecnico',
    component: SoporteTecnico
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
