import Auth from './../auth/auth'
import Router from 'vue-router'
import Routes from './routes'
import Vue from 'vue'

Vue.use(Router)

let trellisRouter = new Router({
  routes: Routes
})

let exceptions = ['login']

trellisRouter.beforeEach((to, from, next) => {
  if (exceptions.includes(to.name) || Auth.check()) {
    next()
  } else {
    next(false)
  }
})

export default trellisRouter
