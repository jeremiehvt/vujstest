import Vue from "vue";
import VueRessource from "vue-resource";
import api_key from "./utils";
Vue.use(VueRessource);
Vue.http.options.root = "http://api.openweathermap.org/data/2.5/weather";

const resources = Vue.resource("?q={city},{country_code}&APPID=" + api_key);
let meteodata = {
  get meteo() {
    return this.data;
  },
  set meteo(data) {
    let meteo = resources
      .get({ city: data.city, country_code: data.country_code }, {})
      .then(
        response => {
          return response.body;
        },
        response => {
          return response.body;
        }
      );

    this.data = meteo;
  }
};
export default meteodata;
