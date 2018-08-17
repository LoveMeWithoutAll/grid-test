<template>
  <v-app>
    <v-content>
      <GithubCorners></GithubCorners>
      <router-view/>
    </v-content>
    <v-footer app>
      <v-layout align-center justify-space-between>
        <span>&copy; 2018. YoungSeon Ahn</span>
        <router-link to="/ranking">
          <v-btn color="gray" outline right flat small>SHOW RANKING</v-btn>
        </router-link>
      </v-layout>
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

<style scoped>
a {
  color: #f5f5f5;
}
</style>
