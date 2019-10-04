import Vue from "vue";
import App from "./App.vue";
import vueResource from "./resources.js";
import vuetify from "./plugins/vuetify";
import router from "./router.js";
import store from "./store/store.js";
Vue.config.productionTip = false;

new Vue({
  vueResource,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
