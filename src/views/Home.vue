<template>
  <v-card class="overflow-hidden">
    <v-app-bar color="#4DB6AC" dark shrink-on-scroll src="@/assets/upacara.jpg" fade-img-on-scroll
      scroll-target="#scrolling-techniques-3">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-toolbar-title>
        <h1 style="margin-top: -5px;">PPP Nurul Ummahat</h1>
      </v-toolbar-title>

      <template v-slot:extension>
        <v-spacer></v-spacer>
        <v-tabs align-with-title>
          <v-tab>Beranda</v-tab>
          <v-tab style="margin-right: -5px;">Profil</v-tab>
          <v-tab>Santri</v-tab>
          <v-tab>Alumni</v-tab>
          <v-tab>Prestasi Santri</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>