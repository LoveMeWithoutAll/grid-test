<template>
  <div>
    <v-btn color="gray" @click="clickButton" outline right flat small>{{ buttonTitle }}</v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  computed: {
    buttonTitle () {
      return this.showRanking ? 'SHOW RANKING' : 'START GAME'
    }
  },
  data () {
    return {
      showRanking: true
    }
  },
  created () {
    this.showRanking = document.location.hash.split('#/')[1] === ''
  },
  methods: {
    clickButton () {
      if (this.showRanking) {
        this.goToRanking()
      } else {
        this.goToGame()
      }
      this.changeBtn()
    },
    goToGame () {
      this.$router.push('/')
    },
    goToRanking () {
      this.$router.push('/ranking')
    },
    changeBtn () {
      if (!this.showRanking) this.restart()
      this.showRanking = !this.showRanking
    },
    ...mapMutations({ start: types.START, clear: types.CLEAR }),
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
