import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views')
  }, 
  {
    path: '/scene',
    name: 'scene',
    component: () => import('../views/scene')
  },
  {
    path: '/scene/detail',
    name: 'scene_detail',
    component: () => import('../views/scene/detail')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/city')
  },
  {
    path: '/city/detail',
    name: 'city_detail',
    component: () => import('../views/city/detail')
  },
  {
    path: '/area',
    name: 'area',
    component: () => import('../views/area')
  },
  {
    path: '/area/detail',
    name: 'area_detail',
    component: () => import('../views/area/detail')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/food')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
