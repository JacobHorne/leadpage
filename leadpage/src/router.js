import Vue from 'vue'
import Router from 'vue-router'
import step1 from './views/step1.vue'
import step2 from './views/step2.vue'

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
    }
  ]
})
