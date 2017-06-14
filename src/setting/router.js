import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ListHerbSearch from '@/pages/list_herb_search'
import ListHerb from '@/pages/list_herb'
import ShowHerb from '@/pages/show_herb'

Vue.use(Router)

export default new Router({
  //mode:'history',
  // scrollBehavior: function (to, from, savedPosition) {
  //   return savedPosition
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list-herb',
      name: 'list_herb_search',
      component: ListHerbSearch,
    },
    {
      path: '/list-herb/:keyword',
      name: 'list_herb',
      component:ListHerb
    },
    {
      path: '/show-herb/:id',
      name: 'show_herb',
      component: ShowHerb
    }
  ]
})
