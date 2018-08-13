<template>
  <v-app>
    <v-content>
      <GithubCorners></GithubCorners>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018. YoungSeon Ahn</span>
    </v-footer>
  </v-app>
</template>

<script>
import GithubCorners from '@/views/GithubCorners'

export default {
  name: 'App',
  components: {
    GithubCorners
  }
}
</script>
