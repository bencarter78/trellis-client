export default [
  {
    path: '/teams/:id/projects',
    name: 'projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:id/projects/create',
    name: 'projects.create',
    component: require('../views/projects/Create.vue')
  },
  {
    path: '/teams/:id/projects/:pid',
    name: 'projects.show',
    component: require('../views/projects/Show.vue')
  },
  {
    path: '/teams/:id/projects/:pid/edit',
    name: 'projects.edit',
    component: require('../views/projects/Edit.vue')
  }
]
