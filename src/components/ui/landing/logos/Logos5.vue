<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6">Learn More</router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="logos5 text-center">
            <v-row dense>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-1.svg')">
                  </v-sheet>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-2.svg')">
                  </v-sheet>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-3.svg')">
                  </v-sheet>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-4.svg')">
                  </v-sheet>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-5.svg')">
                  </v-sheet>
                </a>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="#">
                  <v-sheet color="surface">
                    <img :src="require('@/assets/images/logos/logo-7.svg')">
                  </v-sheet>
                </a>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.logos5 {
  img {
    filter: grayscale(100%) brightness(2);
    width: 180px;
  }

  .theme--dark img {
    filter: grayscale(100%) invert(1);
  }

  a:hover {
    img {
      filter: none;
    }
  }
}
</style>
