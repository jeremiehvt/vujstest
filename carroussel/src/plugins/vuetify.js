import Vue from "vue";
import Vuetify from "vuetify/lib";

let LRU = require("lru-cache");
const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
});

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: true,
    options: {
      themeCache
    }
  }
});
