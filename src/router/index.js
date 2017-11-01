import Vue from 'vue'
import Router from 'vue-router'
import MapView from '@/components/MapView'
import selectMenu from '@/components/SelectMenu'
import loginContent from '@/components/loginContent'
import mainPage from '@/components/MainPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginContent
    },
    // {
    //   path: '/map',
    //   name: 'MapView',
    //   component: MapView
    // },
    // {
    //   path: '/selectmenu',
    //   name: 'SelectMenu',
    //   component: selectMenu
    // },
    {
      path: '/selectmenu',
      name: 'SelectMenu',
      component: selectMenu
    },
    {
      path: '/map',
      // meta: {
      //   auth: true
      // },
      //试验
      component: mainPage,
      // component: selectMenu,
      children: [{
        path: '/map',
        name: 'MapView',
        component: MapView
      },
      {
        path: '/selectmenu',
        name: 'main',
        component: selectMenu
      }]
    }
  ]
})
