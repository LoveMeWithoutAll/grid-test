<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <table>
          <tbody>            
            <tr v-for="idx in sqrt(numbers)" :key="idx">
              <td v-for="kdx in sqrt(numbers)" :key="kdx">
                <v-card>
                  <v-card-text class="text-xs-center">
                    {{ numbers[(sqrt(numbers) * idx - sqrt(numbers) - 1) + kdx] }}
                  </v-card-text>
                </v-card>
              </td>
            </tr>
          </tbody>
        </table>
        <v-divider></v-divider>
        <blockquote>
          &#8220;First, find 0 . Then, next.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields(['numbers'])
  },
  methods: {
    sqrt: (v) => Math.sqrt(v.length)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
