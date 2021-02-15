<template>
  <v-sheet color="transparent">
    <v-container>
      <div class="d-flex">
        <v-divider class="my-1"></v-divider>
        <div class="mx-3 overline">Partners</div>
        <v-divider class="my-1"></v-divider>
      </div>
      <div class="text-center my-4">
        <a href="#"><img :src="require('@/assets/images/logos/logo-1.svg')"></a>
        <a href="#"><img :src="require('@/assets/images/logos/logo-2.svg')"></a>
        <a href="#"><img :src="require('@/assets/images/logos/logo-3.svg')"></a>
        <a href="#"><img :src="require('@/assets/images/logos/logo-4.svg')"></a>
        <a href="#"><img :src="require('@/assets/images/logos/logo-5.svg')"></a>
        <a href="#"><img :src="require('@/assets/images/logos/logo-7.svg')"></a>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>
img {
  filter: grayscale(100%) brightness(2);
  width: 180px;
}

.theme--dark img {
  filter: grayscale(100%) invert(1);
}

img:hover {
  filter: none;
}
</style>
