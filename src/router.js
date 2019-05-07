import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のcomponent
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

//プラグインとして登録
Vue.use(VueRouter);

//VueRouterインスタンスを生成
const router = new VueRouter({
  //#を消す
  mode: 'history',
  //ルーティングの定義
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

const app = new Vue({
    router
}).$mount('#app')

export default router

