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
  {
    path: '/login',
    name: 'login',
    component: require('../views/auth/Login.vue')
  },
  {
    path: '/',
    name: 'projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/projects/create',
    name: 'projects.create',
    component: require('../views/projects/Create.vue')
  },
  {
    path: '/projects/:id',
    name: 'projects.show',
    component: require('../views/projects/Show.vue')
  },
  {
    path: '/projects/:id/edit',
    name: 'projects.edit',
    component: require('../views/projects/Edit.vue')
  }
]
