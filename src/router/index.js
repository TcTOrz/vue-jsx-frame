import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from './auth'

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const routes = [
  { path: '/', name: 'Home', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue') },
  { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue') },
  { path: '/about', name: 'About', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') },
  { path: '/test', name: 'Test', component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue') },
  { path: '/logout', beforeEnter: (to, from, next) => {
    auth.logout()
    next('/login')
  }},
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router