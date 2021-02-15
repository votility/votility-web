<template>
  <v-sheet class="hero9-bg" dark>
    <Toolbar3 />
    <v-container class="py-6 py-sm-12 text-center">
      <v-responsive max-width="800" class="mx-auto">
        <h1 class="text-h4 text-sm-h3 mb-4">How can we help?</h1>
        <v-text-field
          outlined
          filled
          placeholder="Search for answers"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>

<script>
import Toolbar3 from '../toolbar/Toolbar3'

export default {
  components: {
    Toolbar3
  }
}
</script>

<style lang="scss" scoped>
.hero9-bg {
  background-image: url("/images/office.jpg");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    ),
    url("/images/office.jpg");
  background-size: cover;
  background-position: center;
}
</style>
