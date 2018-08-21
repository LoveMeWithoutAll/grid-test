<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in" align-content-center="true">
      <v-layout column align-center>
        <h1 class="display-3 mb-2">Grid test</h1>
        <h2 class="title mb-2">concentration training</h2>
        <blockquote class="mb-2">First, find 1 . Then, next.</blockquote>
        <timer></timer>
        <div v-if="!clear && started" class="text-xs-center">
          <h3>Next</h3>
          <h3 class="display-2">{{ nextNum }}</h3>
        </div>
        <timer-button v-if="!started"></timer-button>
        <v-spacer class="mb-3"></v-spacer>
        <div v-if="clear">
          <h3 class="display-1">Clear! Relax with kittens!</h3>
          <kitten></kitten>
          <ranking-input></ranking-input>
        </div>
        <v-spacer class="mb-1"></v-spacer>
        <grid class="mb-4"></grid>
        <restart-button v-if="started"></restart-button>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import Grid from '@/components/Grid'
import Timer from '@/components/Timer'
import TimerButton from '@/components/TimerButton'
import Kitten from '@/components/Kitten'
import RankingInput from '@/components/RankingInput'
import RestartButton from '@/components/RestartButton'

export default {
  components: {
    Grid,
    Timer,
    Kitten,
    TimerButton,
    RankingInput,
    RestartButton
  },
  computed: {
    ...mapFields(['nextNum', 'clear', 'started'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
