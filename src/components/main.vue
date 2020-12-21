<template>
  <v-row>
    <v-col cols="8">
      <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="items.src">

        </v-carousel-item>
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
          {src:'@/assets/upacara.jpg'},
          'warning',
          'pink darken-2',
        ],
        slides: [
          'First',
          'Second',
          'Third',
        ],
      }
    }
  }
</script>