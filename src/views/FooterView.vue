<template>
  <v-footer app>
    <v-layout align-center justify-space-between>
      <span>&copy; 2018. YoungSeon Ahn</span>
      <footer-button></footer-button>
    </v-layout>
  </v-footer>
</template>

<script>
import FooterButton from '@/components/FooterButton'

export default {
  components: {
    FooterButton
  }
}
</script>
