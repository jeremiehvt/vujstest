import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRessource from "vue-resource";
Vue.config.productionTip = false;
Vue.use(VueRessource);
Vue.http.options.root = "https://jsonplaceholder.typicode.com";
Vue.http.interceptors.push(function(request) {
  return function(response) {
    if (request.after) {
      request.after.call(this, response);
    }
  };
});
new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
