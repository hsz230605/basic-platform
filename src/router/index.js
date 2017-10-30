import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapView from '@/components/MapView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MapView',
      component: MapView
    }
  ]
})
