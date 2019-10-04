<template>
  <v-app-bar extended class="pt-5">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="saisissez le nom de votre ville"
            placeholder="La meteo de votre ville"
            v-model="city"
            @blur="changeMeteoStore(city)"
          ></v-text-field>
          {{city}}
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
      city: "",
      data: {}
    };
  },
  methods: {
    ...mapActions({ changeMeteoStore: "changeMeteo" }),
    handleBlur: () => {
      console.log("ok");
    }
  }
};
</script>