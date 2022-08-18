import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'Login', component: () => import('@/views/Login')
    },
    {
        path: '/kakao-login', name: 'KakaoLogin', component: () => import('@/views/KakaoLogin')
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})
