import { updateField } from 'vuex-map-fields'
import * as types from './mutation_types'

export default {
  updateField,
  [types.NEXT_NUM] (state) {
    state.nextNum++
  }
}
