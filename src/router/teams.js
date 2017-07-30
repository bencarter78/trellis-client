export default [
  {
    path: '/teams',
    name: 'teams.index',
    component: require('../views/teams/Index.vue')
  },
  {
    path: '/teams/create',
    name: 'teams.create',
    component: require('../views/teams/Create.vue')
  },
  {
    path: '/teams/:tuid',
    name: 'teams.show',
    component: require('../views/teams/Show.vue')
  },
  {
    path: '/teams/:tuid/edit',
    name: 'teams.edit',
    component: require('../views/teams/Edit.vue')
  }
]
