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
      <a
        :id="numberId"
        :href="'https://picsum.photos/id/'+ numberId +'/200/300'"
        v-lightbox
        v-for="(numberId, index) in imagesIndex"
        :key="index"
        :data-currentId="index"
      >
        <img :src="'https://picsum.photos/id/'+ numberId +'/150/150'" alt="photo" />
      </a>
      <Lightbox v-bind:imgsIndex="imagesIndex"></Lightbox>
    </v-content>
  </v-app>
</template>

<script>
import Lightbox from "./components/lightbox/Lightbox.vue";

export default {
  name: "App",
  components: {
    Lightbox
  },
  data: () => ({
    imagesIndex: [1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056]
  })
};
</script>
