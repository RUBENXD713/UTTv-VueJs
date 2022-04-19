import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registro from '../views/Registro.vue'
import Dashboard from '../views/Dashboard.vue'
import Reproductor from '../views/Reproductor.vue'
import Perfil from '../views/Perfil.vue'
import AdminDash from '../views/AdminDash.vue'
import VistaPorCarrera from '../views/VistaPorCarrera.vue'
import VistaPorCarrera2 from '../views/VistaPorCarreraMeca.vue'
import SubirVideo from '../views/SubirVideo.vue'
import CodigoAcceso from '../views/CodigoAcceso.vue'
import socket from '../views/socket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/codigo',
    name: 'codigo',
    component: CodigoAcceso
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/reproductor/:id',
    name: 'Reproductor',
    component: Reproductor
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/admin',
    name: 'AdminDash',
    component: AdminDash
  },
  {
    path: '/carrera',
    name: 'VistaPorCarrera',
    component: VistaPorCarrera
  },
  {
    path: '/carrera2',
    name: 'VistaPorCarreraMeca',
    component: VistaPorCarrera2
  },
  {
    path: '/VideoNuevo',
    name: 'SubirVideo',
    component: SubirVideo
  },
  {
    path: '/socket',
    name: 'socket',
    component: socket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
