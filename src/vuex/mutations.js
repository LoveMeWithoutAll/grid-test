import { updateField } from 'vuex-map-fields'
import * as types from './mutation_types'

let stop = (state) => {
  state.minutes = 1
  state.seconds = 0
  state.started = false
}

export default {
  updateField,
  [types.NEXT_NUM] (state) {
    state.nextNum++
  },
  [types.START] (state) {
    state.minutes = 0
    state.seconds = 60
    state.started = true
    setInterval(() => {
      if (state.seconds === 0) {
        stop()
        return
      }
      state.seconds--
    }, 1000)
  },
  [types.STOP] (state) {
    stop(state)
  }
}
