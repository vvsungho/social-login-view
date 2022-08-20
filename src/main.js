import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import request from './utils/request'
import cookie from '@/utils/cookie.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$axios = request
Vue.prototype.$cookie = cookie

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

