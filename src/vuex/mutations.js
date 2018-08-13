import { updateField } from 'vuex-map-fields'
import * as types from './mutation_types'
import { GRID_SIZE } from '@/config'
import { shuffleArray } from '@/services'

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
    setInterval(() => {
      if (state.seconds === 0) {
        state.minutes = 1
        state.seconds = 0
        state.started = false
        return
      }
      state.seconds--
    }, 1000)
  },
  [types.STOP] (state) {
    state.minutes = 1
    state.seconds = 0
    state.started = false
  }
}
