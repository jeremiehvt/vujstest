<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="4">
            <carroussel>
              <slide>
                <img src="https://picsum.photos/200/300" alt="photo" />
              </slide>
              <slide>
                <img src="https://picsum.photos/200/400" alt="photo" />
              </slide>
            </carroussel>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Carroussel from "./components/Carroussel.vue";
import Slide from "./components/Slide.vue";

export default {
  name: "App",
  components: {
    Carroussel,
    Slide
  },
  data: () => ({
    //
  })
};
</script>
