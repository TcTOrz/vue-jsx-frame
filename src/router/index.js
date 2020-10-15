import Vue from 'vue'
import VueRouter from 'vue-router'
import jsonData from '@/assets/routeDirec.json'

Vue.use(VueRouter)

// 隐藏router错误。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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

const routesFn = (obj, c) => {
  let arr = []
  Object.values(obj).forEach((value) => {
    let {name, url, chunkName} = value,
      path = c === '' ? `${chunkName}/Index` : `${c}/${chunkName}/Index`
    url = c === '' ? url : url.slice(1).split('/')[1]
    if (value['children']) {
      let a = { path: url, name: `${name}-${url}`, beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "[request]" */ `@/views/${path}.vue`), children: [] }
      a.children = routesFn(value['children'], chunkName)
      arr.push(a)
    } else {
      arr.push({ path: url, name, beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "[request]" */ `@/views/${path}.vue`) })
    }
  })
  return arr
}

const redirectFn = obj => {
  let arr = []
  Object.values(obj).forEach(value => {
    let {name, url, chunkName} = value,
      path = `${chunkName}/0/Index`
    if (value['children']) {
      arr.push({ path: `/home/${url}`, redirect: `/home/${url}/0`, name, beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "[request]" */ `@/views/${path}.vue`) })
    }
  })
  return arr
}

const routes = [
  { path: '/', name: 'Home', redirect: '/home/0', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue') },
  { path: '/home', name: 'HomeRedirect', redirect: '/home/0', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue') },
  ...redirectFn(jsonData),
  { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue') },
  { path: '/logout', beforeEnter: (to, from, next) => {
    auth.logout()
    next('/login')
  }},
  { path: '/home', name: 'HomePath', component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue'), children: [...routesFn(jsonData, '')] },
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue') }
]

// -----------------------------------------------

// var //chunkName = 'home',
//   name = 'networkConfigure/equipmentList/Index',
//   home = '设备列表',
//   path = '0'

// const routes = [
//   { path: '/', name: 'Home', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue') },
//   { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue') },
//   // { path: '/about', name: 'About', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') },
//   // { path: '/test', name: 'Test', component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue') },
//   { path: '/0', name: 'Home', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue') },
//   { path: '/1', name: '网元配置', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "t" */ '@/views/networkConfigure/Index.vue'), children: [
//     // { path: '0', name: '设备列表', component: () => import(/* webpackChunkName: "equipmentlist" */ '@/views/networkConfigure/equipmentList/Index.vue') },
//     { path: path, name: home, component: () => import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`) },
//     { path: '1', name: '站点维护', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '2', name: 'VIP站点管理', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '3', name: '站点资产管理', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '4', name: '电子地图', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') }
//   ] },
//   { path: '/2', name: '操作维护', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue'), children: [
//     { path: '0', name: '设备监控', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '1', name: '轮询处理', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '2', name: '轮询报告', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '3', name: '上报信息查询', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '4', name: '人为开关告警查询', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') }
//   ] },
//   { path: '/3', name: '操作维护', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue'), children: [
//     { path: '0', name: '设备监控', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '1', name: '轮询处理', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '2', name: '轮询报告', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '3', name: '上报信息查询', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//     { path: '4', name: '人为开关告警查询', component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') }
//   ] },
//   { path: '/5', name: '帮助', beforeEnter: requireAuth, component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue') },
//   { path: '/logout', beforeEnter: (to, from, next) => {
//     auth.logout()
//     next('/login')
//   }},
//   { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue') }
//   // { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue') }
// ]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.path === from.path) {
  //   next({
  //     path: '/',
  //     query: { redirect: to.fullPath }
  //   })
  // }
  // console.log( from, to)
  next()
})

export default router