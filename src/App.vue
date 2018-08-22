<template>
  <v-app>
    <v-content>
      <GithubCorners></GithubCorners>
      <router-view/>
    </v-content>
    <v-footer app>
      <v-layout align-center justify-space-between>
        <span>&copy; 2018. YoungSeon Ahn</span>
        <router-link to="/" v-if="!showRanking">
          <v-btn color="gray" @click="changeBtn" outline right flat small>START GAME</v-btn>
        </router-link>
        <router-link to="/ranking" v-if="showRanking">
          <v-btn color="gray" @click="changeBtn" outline right flat small>SHOW RANKING</v-btn>
        </router-link>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import GithubCorners from '@/views/GithubCorners'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  name: 'App',
  components: {
    GithubCorners
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
  color: #f5f5f5;
}
</style>
