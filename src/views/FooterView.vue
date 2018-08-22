<template>
  <v-footer app>
    <v-layout align-center justify-space-between>
      <span>
        &copy; 2018. <a href="https://lovemewithoutall.github.io/" target="_blank">YoungSeon Ahn</a>
      </span>
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
