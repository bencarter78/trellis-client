import Auth from './auth'
import Projects from './projects'
import Setup from './setup'

export default [
  {
    path: '/',
    name: 'home',
    component: require('../views/Dashboard.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('../views/Dashboard.vue')
  },
  ...Auth,
  ...Projects,
  ...Setup
]
