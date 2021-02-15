<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(stat, i) in stats"
        :key="i"
        cols="12"
        md="6"
        xl="3"
      >
        <v-card class="pa-3">
          <div class="font-weight-bold secondary--text text--lighten-1 mb-2">{{ stat.title }}</div>
          <div class="d-flex align-center">
            <span class="text-h4">{{ stat.value }}</span>
            <span class="text-body-2 font-weight-bold ml-2">
              <span>
                <span v-if="stat.diff === 0">
                  {{ diff }}%
                </span>
                <span v-else-if="stat.diff > 0" class="success--text">
                  <v-icon small color="success">mdi-arrow-top-right</v-icon> {{ stat.diff }}%
                </span>
                <span v-else class="error--text">
                  <v-icon small color="error">mdi-arrow-bottom-right</v-icon> {{ Math.abs(stat.diff) }}%
                </span>
              </span>
            </span>
          </div>
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
        value: '13,748',
        diff: 5.23
      }, {
        title: 'Conversion',
        value: '22.42%',
        diff: -3.83
      }, {
        title: 'Subscribers',
        value: '132',
        diff: 2.77
      }, {
        title: 'MRR',
        value: '$ 3,288.92',
        diff: 8.93
      }]
    }
  }
}
</script>
