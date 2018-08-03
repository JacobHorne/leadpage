import Vue from 'vue'
import Router from 'vue-router'
import step1 from './views/step1.vue'
import step2 from './views/step2.vue'
import medicare from './views/Medicare.vue'
import security from './views/Security.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'step1',
      component: step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: step2
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
