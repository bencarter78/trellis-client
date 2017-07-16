export default [
  {
    path: '/projects',
    name: 'projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:tid/projects/:pid/streams/:sid',
    name: 'teams.projects.streams.show',
    component: require('../views/streams/Show.vue')
  },
  {
    path: '/teams/:tid/projects',
    name: 'teams.projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:tid/projects/create',
    name: 'teams.projects.create',
    component: require('../views/projects/Create.vue')
  },
  {
    path: '/teams/:tid/projects/:pid',
    name: 'teams.projects.show',
    component: require('../views/projects/Show.vue')
  },
  {
    path: '/teams/:tid/projects/:pid/edit',
    name: 'teams.projects.edit',
    component: require('../views/projects/Edit.vue')
  }
]
