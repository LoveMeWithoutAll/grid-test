<template>
  <v-app>
    <v-content>
      <GithubCorners></GithubCorners>
      <router-view/>
    </v-content>
    <footer-view></footer-view>
  </v-app>
</template>

<script>
import GithubCorners from '@/views/GithubCorners'
import FooterView from '@/views/FooterView'

export default {
  name: 'App',
  components: {
    GithubCorners,
    FooterView
  }
}
</script>

<style scoped>
a {
  color: #f5f5f5;
}
</style>
