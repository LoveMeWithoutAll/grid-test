import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store'

import VueGitHubCorners from 'vue-gh-corners'
import 'vue-gh-corners/dist/vue-github-corners.css'
Vue.use(VueGitHubCorners)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
