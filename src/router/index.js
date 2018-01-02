import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Music from '@/pages/Music.vue'
import Note from '@/pages/Note'
import One from '@/pages/One'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/note',
      name: Note,
      component: Note
    },
    {
      path: '/one',
      name: One,
      component: One
    }
  ]
})
