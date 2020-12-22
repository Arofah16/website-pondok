<template>
  <section>
    <div>
      <v-app-bar color="teal darken-4" flat dark>
        <v-avatar>
          <img
            src="@/assets/logonuhat.png"
            alt="John"
          >
        </v-avatar>
    
        <h1 class="a">PPP Nurul Ummahat</h1>
        <!-- <v-toolbar-title>PPP Nurul Ummahat</v-toolbar-title> -->

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
          Artikel
        </v-btn>

        <v-btn text>
          Tokoh
        </v-btn>

        <v-btn text>
          Berita
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
  </section>
</template>
<style scoped>
  .a{
    margin-left:40px;
  }

</style>