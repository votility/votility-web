<template>
  <div>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Learn more about Votility Protocol</h2>
            <div class="text-h6 text-lg-h5 mt-5">
              In this section, we show how to use Votility Protocol to create your next DAO. Through straightforward examples, you will learn how to build the receiver module by implementing IVotilityReceiver interface.
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/images/features/5.jpg" class="rounded-lg elevation-6" max-height="480"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col v-for="(item, i) in features" :key="i" cols="12" md="4">
            <v-card outlined>
              <v-img :src="item.image" height="280"></v-img>
              <v-responsive max-width="360" class="mx-auto text-center pa-4">
                <div class="text-h5 mt-5">{{ item.title }}</div>
                <div class="text-h6 mt-5">{{ item.text }}</div>
                <div class="my-4">
                  <router-link :to="item.link.to" class="text-decoration-none font-weight-bold text-h6">{{ item.link.title }}</router-link>
                </div>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [{
        title: 'Treasury Management',
        image: '/images/project/blog/treasury.jpg',
        text: 'Create autonomous treasury management is a great feature to help your community govern how the team uses the funds to grow the project.',
        link: {
          title: 'Read More',
          to: '/blog/treasury-management'
        }
      }],
    }
  },
}
</script>