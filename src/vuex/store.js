import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import { GRID_SIZE, TEST_TIME } from '@/config'

Vue.use(Vuex)

const inputNumber = GRID_SIZE
const numArr = Array.from(Array(inputNumber * inputNumber).keys()).sort(() => 0.5 - Math.random())

const state = {
  numbers: numArr,
  nextNum: 0,
  minutes: TEST_TIME,
  seconds: 0,
  started: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
