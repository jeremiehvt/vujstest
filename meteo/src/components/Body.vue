<template>
  <v-content>Body {{ getMeteo.city }}</v-content>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMeteo"])
  }
};
</script>