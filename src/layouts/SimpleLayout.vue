<template>
  <v-main>
    <top-menu />
    <router-view></router-view>
    <footer-info />
  </v-main>
</template>

<script>
import TopMenu from '@/lib/components/ui/Public/TopMenu.vue';
import FooterInfo from '../lib/components/ui/Public/FooterInfo.vue';


export default {
  components: { 
    TopMenu,
    FooterInfo,
  },
}
</script>
