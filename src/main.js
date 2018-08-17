import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store'
import VueFire from 'vuefire'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from '@/config'
import VueGitHubCorners from 'vue-gh-corners'
import 'vue-gh-corners/dist/vue-github-corners.css'

Vue.use(VueGitHubCorners)
Vue.use(VueFire)

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)
const db = firebaseApp.database()

console.log(db.ref('scores').on('value', (snapshot) => {
  console.log(snapshot.val())
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
