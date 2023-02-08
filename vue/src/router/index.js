import { createRouter, createWebHashHistory } from 'vue-router'
import etudiantsView from '../components/etudiantsView'
import HelloWorld from '../components/HelloWorld.vue'
import moduleView from '../components/moduleView.vue'
import actyfYearView from '../components/actyfYearView.vue';
const routes = [
  {
    path: '/etudiant',
    name: 'etudiantsView',
    component: etudiantsView
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path: '/module',
    name: 'moduleView',
    component: moduleView
  },


  {
    path: '/actif_year',
    name: 'actyfYearView',
    component: actyfYearView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
