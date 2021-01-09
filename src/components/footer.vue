<template>
  <v-footer color="teal darken-4" padless >
    <v-row justify="center" class="flex"
    >
      <v-col>
        <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="white--text">
        <h4>Tentang Kami</h4><br>
        <h5>Pondok Pesantren Putri Nurul Ummahat adalah Pondok khusus perempuan yang ada di Kotagede </h5>
      </v-col>
      <v-col class="white--text">
        <h4>Alamat</h4><br>
        <h5>Prenggan, KG II/980, Kotagede, Prenggan, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55172</h5>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-col class="py-4 text-center white--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>IT Center PPP Nurul Ummahat</strong>
    </v-col>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),
  }
</script>