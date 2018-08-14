<template>
  <table>
    <tbody>
      <tr v-for="idx in sqrt(numbers)" :key="idx">
        <td v-for="kdx in sqrt(numbers)" :key="kdx">
          <v-card :hover="true" ref="numCards">
            <v-card-text class="text-xs-center" @click="checkIt(idx, kdx)">
              {{ getValue(idx, kdx) }}
            </v-card-text>
          </v-card>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  computed: {
    ...mapFields(['numbers', 'nextNum', 'started'])
  },
  methods: {
    ...mapMutations({increaseNum: types.NEXT_NUM, clear: types.STOP}),
    sqrt: (v) => Math.sqrt(v.length),
    getIndex (idx, kdx) {
      return (this.sqrt(this.numbers) * idx - this.sqrt(this.numbers) - 1) + kdx
    },
    getValue (idx, kdx) {
      return this.numbers[this.getIndex(idx, kdx)]
    },
    checkIt (idx, kdx) {
      if (!this.started) return
      if (this.nextNum === this.getValue(idx, kdx)) {
        this.$refs.numCards[this.getIndex(idx, kdx)].dark = true
        this.increaseNum()
        if (this.nextNum === this.numbers.length) this.clear()
      }
    }
  }
}
</script>

<style>

</style>
