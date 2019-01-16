<template>
  <v-btn @click="restart" small>restart</v-btn>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  methods: {
    ...mapMutations({ start: types.START, clear: types.CLEAR }),
    restart () {
      this.clear()
      this.start()
    }
  }
}
</script>
