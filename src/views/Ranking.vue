<template>
  <v-data-table
    :headers="headers"
    :items="record"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-middle">{{ props.index + 1}}</td>
      <td class="text-xs-middle">{{ props.item.timeLeft }} sec</td>
      <td class="text-xs-middle">{{ props.item.name }}</td>
      <td class="text-xs-middle">{{ props.item.date.toDate() }}</td>
    </template>
  </v-data-table>
</template>

<script>
import Firebase from 'firebase'
import { FIREBASE_CONFIG } from '@/config'

const firebaseApp = Firebase.initializeApp(FIREBASE_CONFIG)
const firestore = firebaseApp.firestore()
firestore.settings({timestampsInSnapshots: true})

export default {
  data () {
    return {
      headers: [
        {text: 'Ranking'},
        {text: 'Time left', value: 'timeLeft'},
        {text: 'Name', value: 'name'},
        {text: 'Date', value: 'date'}
      ]
    }
  },
  firestore () {
    return {
      record: firestore.collection('record').orderBy('timeLeft', 'desc')
    }
  }
}
</script>

<style>

</style>
