import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import NavBar from '@/components/common/navBar'
Vue.component('navBar', NavBar)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
