import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/HelloWorld'
import Source from '@/components/Source'
import Demo from '@/components/Demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'HelloWorld',
      component: recommend
    },
    {
      path: '/ranking',
      name: 'Source',
      component: Source
    },
    {
      path: '/seek',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/',
      redirect: '/recommend'
    }
  ]

})
