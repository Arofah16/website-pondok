<template>
  <v-row>
    <v-col cols="8">
      <v-carousel  class="pa-3">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-card-title>
          Pondok Pesantren Nurul Ummahat
        </v-card-title>

      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    }
  }
</script>