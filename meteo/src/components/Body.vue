<template>
  <v-content>Body {{ getMeteo.meteo }}</v-content>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMeteo"])
  }
};
</script>