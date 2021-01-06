<template>
  <v-row>
    <v-col cols="8">
      <v-carousel class="pa-3" cycle>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
          transition="fade-transition">
          <v-sheet :jud="judul[i]">
            <v-row class="fill-bottom" align="center" justify="center">
              <div>{{judul.note}} </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="4" ml="5">
      <v-card>
        <v-card-title>
          Pondok Pesantren Nurul Ummahat
        </v-card-title>
        <v-card-subtitle>
          Pondok Pesantren Putri yang mempunyai visi misi Modern, Moderat, Manusiawi
        </v-card-subtitle>

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
            src: require('@/assets/1.jpg'),
          },
          {
            src: require('@/assets/upacara.jpg'),
          },
          {
            src: require('@/assets/pakkyai.jpg'),
          },
        ],
        judul: [
          {
            note:'Pentas Seni Peringatan Hari Ulang Tahun Republik Indonesia ke-76' ,
          },
          {
            note:'Bapak Kyai Muhaimin memimpin upacara Peringatan HUT RI Ke-76',
          },
          {
            note:'Sarasehan Kuliah di Tiongkok',
          },
        ],
      }
    },
  }
</script>