<template>
  <div>
    <router-link to="/" v-if="!showRanking">
      <v-btn color="gray" @click="changeBtn" outline right flat small>START GAME</v-btn>
    </router-link>
    <router-link to="/ranking" v-if="showRanking">
      <v-btn color="gray" @click="changeBtn" outline right flat small>SHOW RANKING</v-btn>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  data () {
    return {
      showRanking: true
    }
  },
  created () {
    this.showRanking = document.location.hash.split('#/')[1] === ''
  },
  methods: {
    changeBtn () {
      if (!this.showRanking) this.restart()
      this.showRanking = !this.showRanking
    },
    ...mapMutations({start: types.START, clear: types.CLEAR}),
    restart () {
      this.clear()
      this.start()
    }
  }
}
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0);
}
</style>
