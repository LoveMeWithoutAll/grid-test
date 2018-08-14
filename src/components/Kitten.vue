<template>
  <div class="well kittens">
    <img :src="catimgsrc" />
  </div>
</template>

<style scoped>
</style>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields(['timestamp']),
    catimgsrc () {
      return 'http://thecatapi.com/api/images/get?size=med&ts=' + this.timestamp
    }
  }
}
</script>
