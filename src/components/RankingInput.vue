<template>
  <v-slide-x-transition v-if="showInput">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="name"
              label="Save your record and name!"
              append-icon="send"
              @click:append="saveRecord"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-slide-x-transition>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { firestore } from '@/firebase/firestore'

export default {
  data () {
    return {
      name: '',
      showInput: true
    }
  },
  computed: {
    ...mapFields(['seconds'])
  },
  methods: {
    saveRecord () {
      firestore.collection('record').doc(new Date().getTime().toString()).set({
        name: this.name,
        timeLeft: this.seconds,
        date: new Date().getTime()
      })
      this.showInput = false
    }
  }
}
</script>

<style>

</style>
