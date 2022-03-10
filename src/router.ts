import Home from './views/Home.vue'
import Code from './views/Code.vue'
import Graphics from './views/Graphics.vue'
import SoundDesign from './views/SoundDesign.vue'
import Zero from './views/Zero.vue'
// import Project from './views/Project.vue'

import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'zero', path: '/zero', component: Zero },
    
    { name: '404', path: '/:pathMatch(.*)*', redirect: '/' },
    { name: '404', path: '/:pathMatch(.*)*', redirect: '/' },
    { name: '404', path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

