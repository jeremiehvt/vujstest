<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <router-view name="header"></router-view>
          <router-view></router-view>
          <router-view name="footer"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
export default {
  name: "App",
};
</script>
<style lang="css">
</style>
