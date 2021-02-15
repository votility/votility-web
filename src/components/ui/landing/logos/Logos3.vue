<template>
  <v-sheet>
    <v-container class="text-center">
      <div class="text-body-1 text-uppercase font-weight-bold">Trusted by the best in the business</div>
      <div class="logos3 my-4">
        <v-row dense>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-1.svg')">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-2.svg')">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-3.svg')">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-4.svg')">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-5.svg')">
              </v-sheet>
            </a>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <a href="#">
              <v-sheet color="surface">
                <img :src="require('@/assets/images/logos/logo-7.svg')">
              </v-sheet>
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.logos3 {
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
