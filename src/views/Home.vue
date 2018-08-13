<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1 class="display-3 mb-2">Grid test</h1>
        <h2 class="title mb-2">concentration training</h2>        
        <blockquote class="mb-4">First, find 0 . Then, next.</blockquote>
        <grid></grid>
        <v-spacer class="mb-4"></v-spacer>
        <h3>Next</h3>
        <h3 class="display-2">{{ nextNum }}</h3>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import Grid from '@/components/Grid'

export default {
  components: {
    Grid
  },
  computed: {
    ...mapFields(['nextNum'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
