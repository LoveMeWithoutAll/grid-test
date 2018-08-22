<template>
  <v-app>
    <v-content>
      <GithubCorners></GithubCorners>
      <router-view/>
    </v-content>
    <v-footer app>
      <v-layout align-center justify-space-between>
        <span>&copy; 2018. YoungSeon Ahn</span>
        <footer-button></footer-button>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import GithubCorners from '@/views/GithubCorners'
import FooterButton from '@/components/FooterButton'

export default {
  name: 'App',
  components: {
    GithubCorners,
    FooterButton
  }
}
</script>

<style scoped>
a {
  color: #f5f5f5;
}
</style>
