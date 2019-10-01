import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;
import Homepage from "./components/Homepage.vue";
// import Article from "./components/Article.vue";
// import Sidebar from "./components/Sidebar.vue";
import PostUn from "./components/PostUn.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Homepage,
      name: "root"
    },
    // {
    //   path: "/Article/:id(\\d+)",
    //   components: {
    //     default: Article,
    //     sidebar: Sidebar
    //   },
    //   name: "article"
    // },
    {
      path: "/post_un/:id(\\d+)",
      component: PostUn,
      name: "post_un"
    },
    {
      path: "/*",
      redirect: "/"
    }
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
