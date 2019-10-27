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
          {{meteo.city}}
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapActions } from "vuex";
import resources from "../resources";
import formatter from "../formatter";
export default {
  data() {
    return {
      meteo: { city: "", data: "" }
    };
  },
  mounted() {
    //todo add list functionnality meteo to the store
    //set actions
    this.meteo.city = this.$store.getters.getMeteo.city;

    resources.meteo = {
      city: this.meteo.city,
      country_code: "fr"
    };

    this.meteo.data = resources.meteo;
    this.$store.commit("ADD_METEO", this.meteo);
    let data = this.meteo.data;
    async function f0(d) {
      console.log(await d);
    }
    f0(data);
    formatter.data = this.meteo.data;
  },
  methods: {
    ...mapActions({ changeMeteoStore: "changeMeteo" }),
    handleBlur: () => {
      console.log("ok");
    }
  }
};
</script>