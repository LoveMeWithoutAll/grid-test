<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1 class="display-3 mb-2">Grid test</h1>
        <h2 class="title mb-2">concentration training</h2>        
        <blockquote class="mb-4">First, find 0 . Then, next.</blockquote>
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
        <v-spacer class="mb-4"></v-spacer>
        <h3>Next</h3>
        <h3 class="display-2">{{ nextNum }}</h3>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
