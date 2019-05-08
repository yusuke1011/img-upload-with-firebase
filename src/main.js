// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//Router
import router from './router.js'

//firebase
import firebase from "firebase"

//vuex store
import store from './store/store.js'

//QR
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

Vue.config.productionTip = false;

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyA7yxmdWnINOQTDVoDCjSjEmPGrzo4QZ5M",
  authDomain: "km-image.firebaseapp.com",
  databaseURL: "https://km-image.firebaseio.com",
  projectId: "km-image",
  storageBucket: "km-image.appspot.com",
  messagingSenderId: "938207171059",
  appId: "1:938207171059:web:2bd52aa3e82909ca"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
