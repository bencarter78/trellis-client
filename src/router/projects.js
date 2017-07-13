export default [
  {
    path: '/projects',
    name: 'projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:id/projects',
    name: 'teams.projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:id/projects/create',
    name: 'teams.projects.create',
    component: require('../views/projects/Create.vue')
  },
  {
    path: '/teams/:id/projects/:pid',
    name: 'teams.projects.show',
    component: require('../views/projects/Show.vue')
  },
  {
    path: '/teams/:id/projects/:pid/edit',
    name: 'teams.projects.edit',
    component: require('../views/projects/Edit.vue')
  }
]
