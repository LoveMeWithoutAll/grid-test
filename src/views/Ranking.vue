<template>
  <v-data-table
    :headers="headers"
    :items="recordByGroup"
    hide-actions
    :loading="record.length === 0"
    no-data-text = "Now loading"
    class="elevation-1"
  >
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td class="text-xs-middle">{{ props.index + 1}}</td>
      <td class="text-xs-middle">{{ props.item.timeLeft }} sec</td>
      <td class="text-xs-middle">{{ props.item.name }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { firestore } from '@/firebase/firestore'
import _ from 'lodash'

export default {
  data () {
    return {
      headers: [
        {text: 'Ranking', value: 'rank', sortable: false},
        {text: 'Time left', value: 'timeLeft', sortable: false},
        {text: 'Name', value: 'name', sortable: false}
      ]
    }
  },
  computed: {
    recordByGroup () {
      let result = _.chain(this.record)
        .groupBy('name')
        .map((v, i) => {
          return {
            '.key': _.head(v)['.key'],
            name: i,
            timeLeft: _.head(v).timeLeft
          }
        })
        .groupBy('timeLeft')
        .map((v, i) => {
          return {
            '.key': _.head(v)['.key'],
            name: _.map(v, 'name').join(' & '),
            timeLeft: i
          }
        })
        .reverse()
        .value()
      return result
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
