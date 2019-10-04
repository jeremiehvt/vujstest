import Vue from "vue";
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Body,
        header: Header,
        footer: Footer
      }
    },
    { path: "/*" }
  ]
});

export default router;
