<template>
  <table>
    <tbody>
      <tr v-for="idx in sqrt(numbers)" :key="idx">
        <td v-for="kdx in sqrt(numbers)" :key="kdx">
          <v-card>
            <v-card-text class="text-xs-center" @click="checkIt(getValue(idx, kdx))">
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
    ...mapFields(['numbers', 'nextNum'])
  },
  methods: {
    ...mapMutations({increaseNum: types.NEXT_NUM}),
    sqrt: (v) => Math.sqrt(v.length),
    getValue (idx, kdx) {
      return this.numbers[(this.sqrt(this.numbers) * idx - this.sqrt(this.numbers) - 1) + kdx]
    },
    checkIt (v) {
      console.log(v)
      if (this.nextNum === v) {
        console.log('right')
        this.increaseNum()
      } else {
        console.log('fail..')
      }
    }
  }
}
</script>

<style>

</style>
