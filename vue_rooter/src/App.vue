<template>
  <v-app>
    <v-content>
      <!-- <div class="sidebar">
        <h1>sidebar</h1>
        <router-view name="sidebar"></router-view>
      </div>-->
      <div class="menu">
        <router-link :to="{name: 'root'}">accueil</router-link>
        <br />
        <br />
        <router-link :to="{name: 'post_un', params: {id:1}}">article1</router-link>
      </div>
      <div class="main">
        <h1>MAin</h1>
        <router-view></router-view>
      </div>
    </v-content>
    <!-- <pre>{{JSON.stringify($route, null, 2)}}</pre> -->
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
