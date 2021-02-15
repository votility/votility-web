<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(stat, i) in stats"
        :key="i"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card class="pa-3 text-center">
          <div class="overline mb-2">{{ stat.title }}</div>
          <div class="text-h4">{{ stat.value }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stats: [{
        title: 'Visits',
        value: '13,748'
      }, {
        title: 'Conversion',
        value: '22.42%'
      }, {
        title: 'Subscribers',
        value: '132'
      }, {
        title: 'MRR',
        value: '$ 3,288.92'
      }]
    }
  }
}
</script>
