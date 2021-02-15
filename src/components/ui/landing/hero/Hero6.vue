<template>
  <div class="hero6">
    <v-sheet class="bg-sheet pb-8">
      <Toolbar3 />
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 mt-md-6">Prototype your <span class="primary--text">web project</span></h1>
        <h2 class="text-h6 text-sm-h5 text--lighten-2 mt-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
        <v-img :src="require('@/assets/images/shot.png')" alt="" class="rounded elevation-3 mb-6"></v-img>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Toolbar3 from '../toolbar/Toolbar3'

export default {
  components: {
    Toolbar3
  }
}
</script>

<style scoped>
.bg-sheet {
  margin-bottom: 120px;
}

.hero6 .v-image {
  margin-top: -180px;
  top: 240px;
}

@media screen and (min-width: 700px) {
  .bg-sheet {
    margin-bottom: 220px;
  }

  .hero6 .v-image {
    margin-top: -240px;
    top: 340px;
  }
}
</style>
