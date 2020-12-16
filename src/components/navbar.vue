<template>
  <v-app>

    <template>
      <v-card class="overflow-hidden">
        <v-app-bar color="#4DB6AC" dark shrink-on-scroll src="@/assets/upacara.jpg" fade-img-on-scroll
          scroll-target="#scrolling-techniques-3">
          <v-toolbar-title>
            <h1 style="margin-top: -10px">PPP Nurul Ummahat</h1>
            <v-divider></v-divider>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn text>
            Beranda
          </v-btn>
          <v-btn text>
            Profil
          </v-btn>
          <v-btn text>
            Santri
          </v-btn>
          <v-btn text>
            Alumni
          </v-btn>
          <v-btn text>
            Prestasi Santri
          </v-btn>
          <v-btn text>
            Warta
          </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
          <v-container style="height: 1000px;">
          <Carousel/>
          </v-container>
        </v-sheet>
      </v-card>
    </template>
  </v-app>
</template>
<script>
  import Carousel from "@/components/main.vue"
  export default{
    components:{
      Carousel,
    }
  }
</script>