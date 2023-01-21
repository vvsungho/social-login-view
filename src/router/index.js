import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Main', component: () => import('@/views/Main') },
    { path: '/kakao-login', name: 'KakaoLogin', component: () => import('@/views/KakaoLogin') },
    { path: '/naver-login', name: 'NaverLogin', component: () => import('@/views/NaverLogin') }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
