import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store'
import VueFireStore from 'vue-firestore'
import VueGitHubCorners from 'vue-gh-corners'
import 'vue-gh-corners/dist/vue-github-corners.css'

import 'firebase/firestore'

Vue.use(VueGitHubCorners)
Vue.use(VueFireStore)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
