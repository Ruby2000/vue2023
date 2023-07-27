import { createRouter, createWebHistory } from 'vue-router'
// 直接引入
import Start from '../view/Start.vue'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/home',
        name: 'Home',
        // 按需引入，节约性能
        component: () => import('../view/Home.vue')
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
