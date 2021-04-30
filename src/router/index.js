import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration'

import * as fb from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration,
    meta: {
      requiresLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresLogin = to.matched.some(tag => tag.meta.requiresLogin)
  const currentUser = fb.auth.currentUser

  if (requiresLogin && !currentUser) {
    if (from.path === '/') {
      return next()
    }
    return next('/')
  }
  return next()
})

export default router
