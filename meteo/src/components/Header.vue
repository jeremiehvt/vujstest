<template>
  <v-app-bar extended class="pt-5">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="saisissez le nom de votre ville"
            placeholder="La meteo de votre ville"
            v-model="meteo.city"
            @blur="changeMeteoStore(meteo)"
          ></v-text-field>
          {{meteo}}
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      meteo: { city: "", data: "" }
    };
  },
  mounted() {
    //set actions
    this.meteo = this.$store.state.meteo;
    this.$store.dispatch("changeMeteo", this.meteo);
    // console.log(this.meteo);
  },
  methods: {
    ...mapActions({ changeMeteoStore: "changeMeteo" }),
    handleBlur: () => {
      console.log("ok");
    }
  }
};
</script>