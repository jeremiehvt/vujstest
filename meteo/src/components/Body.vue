<template>
  <v-content>Body {{ getMeteo }}</v-content>
</template>
<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState(["meteo"])
    ...mapGetters(["getMeteo"])
  }
};
</script>