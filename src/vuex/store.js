import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import { GRID_SIZE, TEST_TIME } from '@/config'
import { shuffleArray } from '@/services'

Vue.use(Vuex)

const state = {
  numbers: shuffleArray(GRID_SIZE),
  nextNum: 1,
  minutes: TEST_TIME,
  seconds: 0,
  started: false,
  interval: null,
  clear: false,
  timestamp: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
