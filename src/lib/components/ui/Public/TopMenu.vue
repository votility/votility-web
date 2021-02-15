<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" link>
          <v-list-item-content>
            <a 
            :href="`${item.id}`" 
            :key="index" 
            class="mx-1 v-btn v-btn--text theme--light v-size--default">
            {{ item.title }}
          </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-app-bar app height="80">
      <v-container class="py-0 px-0 px-sm-2 fill-height" :fluid="isFluid">
        <router-link to="/" class="d-flex align-center text-decoration-none mr-2">
          <img src="/images/project/logo-small.png" alt="" height="48" class="mr-1">
          <span class="font-weight-black text-uppercase">
            Votility
          </span>
        </router-link>

        <div class="d-none d-md-block">
          <a 
            :href="`${item.id}`" 
            v-for="(item, index) in menu" 
            :key="index" text 
            class="mx-1 v-btn v-btn--text theme--light v-size--default">
            {{ item.title }}
          </a>
        </div>

        <v-spacer></v-spacer>

        <v-btn @click="goToApp" color="primary" large >
          Go to App
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      menu: [{
        title: 'Get Ready',
        id: '/#getready',
      }, {
        title: 'How it works',
        id: '/#howitworks',
      }, {
        title: 'The Magic',
        id: '/#themagic',
      }, {
        title: 'FAQ',
        id: '/#faq'
      }],
    }
  },

  methods: {
    goToApp() {
      this.$router.push('/proposals');
    },
  }
}
</script>