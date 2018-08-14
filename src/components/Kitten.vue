<template>
  <img :src="catimgsrc" class="center" />
</template>

<style scoped>
</style>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields(['timestamp']),
    catimgsrc () {
      return 'http://thecatapi.com/api/images/get?size=small&ts=' + this.timestamp
    }
  }
}
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
