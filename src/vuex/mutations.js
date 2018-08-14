import { updateField } from 'vuex-map-fields'
import * as types from './mutation_types'
import { GRID_SIZE } from '@/config'
import { shuffleArray } from '@/services'

function toggleStop (state) {
  state.started = false
  clearInterval(state.interval)
}

function tick (state) {
  if (state.seconds === 0) {
    toggleStop(state)
    clearInterval(state.interval)
    return
  }
  state.seconds--
}

export default {
  updateField,
  [types.NEXT_NUM] (state) {
    state.nextNum++
  },
  [types.START] (state) {
    state.numbers = shuffleArray(GRID_SIZE)
    state.nextNum = 0
    state.minutes = 0
    state.seconds = 60
    state.started = true
    state.interval = setInterval(() => tick(state), 1000)
  },
  [types.STOP] (state) {
    toggleStop(state)
  }
}
