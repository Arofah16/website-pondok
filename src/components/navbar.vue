<template>
  <v-app>

    <template>
      <v-card class="overflow-hidden">
        <v-app-bar color="#4DB6AC" dark shrink-on-scroll src="@/assets/upacara.jpg" fade-img-on-scroll
          scroll-target="#scrolling-techniques-3">
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
          </template>
    
          <v-toolbar-title>
            <h1 style="margin-top: -10px">PPP Nurul Ummahat</h1>
            <v-divider></v-divider>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
            <v-tabs>
              <v-tab>Beranda</v-tab>
              <v-tab >Profil</v-tab>
              <v-tab>Santri</v-tab>
              <v-tab>Alumni</v-tab>
              <v-tab>Prestasi Santri</v-tab>
            </v-tabs>
          </div>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
      </v-card>
    </template>
  </v-app>
</template>