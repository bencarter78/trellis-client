let prefix = 'setup'

export default [
  {
    path: `/${prefix}`,
    name: prefix,
    redirect: `/${prefix}/team`
  },
  {
    path: `/${prefix}/team`,
    name: `${prefix}/team`,
    component: require('../views/setup/Team.vue')
  }
]
