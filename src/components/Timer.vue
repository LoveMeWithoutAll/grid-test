<template>
  <div>
    <v-layout column align-center>
      <h2 class="title mb-2">{{ min | leftpad }} : {{ sec | leftpad }}</h2>
      <div>
        <v-btn @click="start" :disabled="started" small>start</v-btn>
        <v-btn @click="stop" :disabled="!started" small>stop</v-btn>
      </div>
    </v-layout>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  computed: {
    ...mapFields({min: 'minutes', sec: 'seconds', started: 'started'})
  },
  methods: {
    ...mapMutations({startTimer: types.START, stopTimer: types.STOP}),
    start () {
      this.startTimer()
    },
    stop () {
      this.stopTimer()
    }
  },
  filters: {
    leftpad (val) {
      if (val >= 10) return val
      return '0' + val
    }
  }
}
</script>
