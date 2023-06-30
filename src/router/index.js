import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactenosView from '@/views/ContactenosView.vue';
import FotosView from '@/views/FotosView.vue';
import Foto from '@/components/Foto.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contactenos',
    name: 'contactenos',
    component: ContactenosView
  },
  {
    path: '/fotos',
    name: 'fotos',
    component: FotosView
  },
  {
    path: '/fotos/:id',
    name: 'foto',
    component: Foto
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue');
    }

  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
