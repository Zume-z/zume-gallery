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
    { name: 'code', path: '/code', component: Code },
    { name: 'graphics', path: '/graphics', component: Graphics },
    { name: 'sounddesign', path: '/sounddesign', component: SoundDesign },
    { name: 'zero', path: '/zero', component: Zero },
    // { name: 'project', path: '/project/:id', component: Project, props: true },
    { name: '404', path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
