import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ListHerb from '@/pages/list_herb'
import ListHerbResult from '@/pages/list_herb_result'
import ShowHerb from '@/pages/show_herb'

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list-herb',
      name: 'list_herb',
      component: ListHerb,
      children: [
      {
        path: 'result/:keyword',
        name: 'list_result',
        component:ListHerbResult
      }]
    },
    {
      path: '/show-herb/:id',
      name: 'show_herb',
      component: ShowHerb
    }
  ]
})
