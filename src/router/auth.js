export default [
  {
    path: '/register',
    name: 'register',
    component: require('../views/auth/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('_token')
      next('/login')
    }
  }
]
