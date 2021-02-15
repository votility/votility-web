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
        <v-card>
          <div class="d-flex align-center pa-3">
            <div class="font-weight-bold secondary--text text--lighten-1 mb-2">{{ stat.title }}</div>
            <v-spacer></v-spacer>

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

          <v-sparkline
            :value="stat.graphValues"
            fill
            auto-draw
            line-width="2"
            color="secondary"
            :gradient="stat.diff > 0 ? ['#05c075', '#63c8a0'] : ['#ef476f', '#e7748f']"
            :auto-draw-duration="800"
            :smooth="10"
            :padding="0"
          ></v-sparkline>
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
        diff: 5.23,
        graphValues: [
          12143,
          11143,
          13143,
          12143,
          12143,
          12143,
          13748
        ]
      }, {
        title: 'Conversion',
        value: '22.42%',
        diff: -3.83,
        graphValues: [
          25,
          22,
          21,
          18,
          21,
          20,
          22.42
        ]
      }, {
        title: 'Subscribers',
        value: '132',
        diff: 2.77,
        graphValues: [
          118,
          118,
          122,
          122,
          132,
          132,
          132
        ]
      }, {
        title: 'MRR',
        value: '$ 3,288.92',
        diff: 8.93,
        graphValues: [
          3000,
          3100,
          3090,
          3070,
          3200,
          3450,
          3288
        ]
      }]
    }
  }
}
</script>
