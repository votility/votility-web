<template>
  <v-layout class="fill-height">
    <!-- Navigation -->
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      clipped
      :color="$vuetify.breakpoint.lgAndUp ? 'surface': ''"
      :right="$vuetify.rtl"
      width="260"
    >
      <!-- Navigation menu -->
      <main-menu :menu="menu" class="mt-2" />
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-app-bar
      app
      flat
      color="surface"
      class="app-bar-full"
      clipped-left
    >
      <v-card
        class="flex-grow-1 d-flex pa-1"
        tile
      >
        <div class="d-flex flex-grow-1 align-center">
          <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <div class="d-flex px-1 align-center">
            <img src="/images/v-logo-small.png" height="48" alt="logo" class="mr-1">
            <div>
              <div class="title font-weight-bold text-uppercase primary--text">{{ config.product.name }}</div>
              <div class="overline grey--text">{{ config.product.version }}</div>
            </div>
          </div>

          <v-spacer></v-spacer>

          <div :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']">
            <toolbar-notifications />
          </div>

          <toolbar-user />
        </div>
      </v-card>
    </v-app-bar>

    <v-container :fluid="!isContentBoxed" class="pt-3">

      <!-- <router-view></router-view> -->

      <!-- DEMO PURPOSES DEFAULT ROUTER VIEW -->
      <div class="my-3 fill-height">
        <h1 class="text-h4">Dashboard</h1>
        <v-divider class="my-2"></v-divider>
        <Card5 class="pa-0" />
        <UserTable />
        <Card2 class="pa-0" />
      </div>
    </v-container>

    <v-footer app>
      <div class="overline">
        Copyright © 2020 <a href="https://indielayer.com" target="_blank">Indielayer</a>, All rights Reserved
      </div>
      <v-spacer></v-spacer>
      <div class="overline">
        Made with <v-icon small color="pink">mdi-heart</v-icon> by <a href="https://indielayer.com" target="_blank">Indielayer</a>
      </div>
    </v-footer>
  </v-layout>
</template>

<script>
import config from '@/configs'
import MainMenu from '@/components/navigation/MainMenu'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import menu from '@/components/ui/application/layout/menu'
import UserTable from '@/components/examples/UserTable'
import Card2 from '@/components/ui/application/card/Card2'
import Card5 from '@/components/ui/application/card/Card5'

export default {
  components: {
    MainMenu,
    ToolbarUser,
    ToolbarNotifications,
    UserTable,
    Card2,
    Card5
  },
  data() {
    return {
      menu,
      config,
      drawer: null,
      isContentBoxed: false
    }
  },

  mounted() {
  }
}
</script>

<style lang="scss">
.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}
</style>
