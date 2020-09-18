import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Appindex from '@/components/home/Appindex'
import Login from '@/components/Login'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import Books from '../components/library/Books'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //Home页面不需要被访问
      redirect:'index',
      children:[
        {
          path: '/index',
          name: 'Appindex',
          component: Appindex,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta:{
            requireAuth:true
          }
        },
        {
          path: '/books',
          name: 'Books',
          component: Books,
          meta:{
            requireAuth:true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
