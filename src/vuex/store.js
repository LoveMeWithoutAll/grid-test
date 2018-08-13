import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const inputNumber = 7
const numArr = Array.from(Array(inputNumber * inputNumber).keys()).sort(() => 0.5 - Math.random())

const state = {
  numbers: numArr
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
