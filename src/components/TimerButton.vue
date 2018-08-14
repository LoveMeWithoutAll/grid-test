<template>
  <div>
    <v-btn @click="start" :disabled="started" small>start</v-btn>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  computed: {
    ...mapFields({started: 'started'})
  },
  methods: {
    ...mapMutations({startTimer: types.START}),
    start () {
      this.startTimer()
    }
  }
}
</script>
