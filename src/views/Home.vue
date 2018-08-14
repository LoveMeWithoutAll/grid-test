<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in" align-content-center="true">
      <v-layout column align-center>
        <h1 class="display-3 mb-2">Grid test</h1>
        <h2 class="title mb-2">concentration training</h2>
        <blockquote class="mb-2">First, find 0 . Then, next.</blockquote>
        <timer></timer>
        <div v-if="!clear && started" class="text-xs-center">
          <h3>Next</h3>
          <h3 class="display-2">{{ nextNum }}</h3>
        </div>
        <timer-button v-if="!started"></timer-button>
        <v-spacer class="mb-3"></v-spacer>
        <grid></grid>
        <v-spacer class="mb-4"></v-spacer>
        <div v-if="clear">
          <h3 class="display-2">Clear! Relax with kittens!</h3>
          <kitten></kitten>
        </div>
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

export default {
  components: {
    Grid,
    Timer,
    Kitten,
    TimerButton
  },
  computed: {
    ...mapFields(['nextNum', 'clear', 'started'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
