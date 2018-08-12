import Vue from 'vue'
import Router from 'vue-router'
import disability from './views/disability.vue'
import disability2 from './views/disability2.vue'
import medicare from './views/Medicare.vue'
import security from './views/Security.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'disability',
      component: disability
    },
    {
      path: '/disability2',
      name: 'disability2',
      component: disability2
    },
    {
      path: '/medicare',
      name: 'medicare',
      component: medicare
    },
    {
      path: '/security',
      name: 'security',
      component: security
    }
  ]
})
