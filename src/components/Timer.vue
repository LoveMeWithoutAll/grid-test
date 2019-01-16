<template>
  <div>
    <v-layout column align-center>
      <h2 class="title mb-2">{{ min | leftpad }} : {{ sec | leftpad }}</h2>
    </v-layout>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields({ min: 'minutes', sec: 'seconds' })
  },
  filters: {
    leftpad (val) {
      if (val >= 10) return val
      return '0' + val
    }
  }
}
</script>
