export default [
  {
    path: '/projects',
    name: 'projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:tuid/projects/:puid/streams/:suid',
    name: 'teams.projects.streams.show',
    component: require('../views/streams/Show.vue')
  },
  {
    path: '/teams/:tuid/projects',
    name: 'teams.projects.index',
    component: require('../views/projects/Index.vue')
  },
  {
    path: '/teams/:tuid/projects/create',
    name: 'teams.projects.create',
    component: require('../views/projects/Create.vue')
  },
  {
    path: '/teams/:tuid/projects/:puid',
    name: 'teams.projects.show',
    component: require('../views/projects/Show.vue')
  },
  {
    path: '/teams/:tuid/projects/:puid/edit',
    name: 'teams.projects.edit',
    component: require('../views/projects/Edit.vue')
  }
]
