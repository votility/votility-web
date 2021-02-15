<template>
  <v-container class="py-6">
    <h2 class="text-h5 mb-3">Current Openings</h2>
    <v-divider></v-divider>
    <v-row>
      <v-col v-for="(item, i) in openings" :key="i" cols="12" md="4">
        <v-card outlined flat>
          <v-card-title class="font-weight-bold">
            <div class="flex-grow-1 text-truncate">
              {{ item.title }}
              <v-divider></v-divider>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <v-chip
                v-for="(tag, j) in item.tags"
                :key="j"
                class="mr-1 mb-2"
                small
              >
                {{ tag }}
              </v-chip>
            </div>
            <div>
              {{ item.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" :to="item.to">View and Apply</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      openings: [{
        title: 'Senior Software Engineer',
        tags: ['Frontend', 'React', 'Redux', 'Remote'],
        description: 'Focus on evolving our Universal React/Redux front end and be the future of accessible web interfaces using the latest technology stack.',
        to: '#'
      }, {
        title: 'Lead Data Scientist',
        tags: ['Data', 'R&D', 'Remote'],
        description: 'As a Lead Data Scientist, you will be helping us build the next-generation intelligent platform of the art Machine Learning, and Deep Learning.',
        to: '#'
      }, {
        title: 'Senior Data Quality Analyst',
        tags: ['QA', 'Usability', 'Remote'],
        description: 'As a Senior Data Quality Analyst, you\'re responsible for analysing and identifying improvement areas for our data.',
        to: '#'
      }]
    }
  }
}
</script>
