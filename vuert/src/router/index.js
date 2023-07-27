import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myHappy from "@/views/myHappy";
import myCw from "@/views/myCw";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/happy',
    name: 'name',
    component: myHappy
  },
  {
    path: '/1',
    name: '1',
    component: myCw
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
