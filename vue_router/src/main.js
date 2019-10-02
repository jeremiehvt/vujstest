import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;
import Homepage from "./components/Homepage.vue";
import Article from "./components/Article.vue";
import Sidebar from "./components/Sidebar.vue";
// import PostUn from "./components/PostUn.vue";
import PostDeux from "./components/PostDeux.vue";

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
    {
      path: "/async_load",
      component: resolve => require(["./components/AsyncLoad.vue"], resolve)
    },
    {
      path: "/Article/:id(\\d+)",
      components: {
        default: Article,
        sidebar: Sidebar
      },
      name: "article"
    },
    {
      path: "/post_un/:id(\\d+)",
      component: resolve => require(["./components/PostUn.vue"], resolve),
      name: "post_un",
      // beforeEnter(route, redirect, next, to) {
      //   console.log(next);
      //   let confirm = window.confirm("effectuer cette action ?");
      //   if (confirm) {
      //     next(to);
      //   } else {
      //     // pour redirect sur la même page
      //     redirect;
      //     // pour redirect sur une autre page
      //     // next("/");
      //   }
      // },
      children: [
        {
          path: "/post_deux/:id(\\d+)",
          name: "post_deux",
          component: PostDeux
        }
      ]
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
