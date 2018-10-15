import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import NavBar from '@/components/common/navBar'
import StuManage from '@/components/stumanage'
import UserSets from '@/components/usersets'
import NotFound from '@/components/notFound'

Vue.component('navBar', NavBar)

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/home/stumanage',
      name: 'stumanage',
      component: StuManage
    },
    {
      path: '/usersets',
      name: 'usersets',
      component: UserSets
    }
  ]
})
