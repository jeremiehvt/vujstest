import Vue from "vue";
import store from "./LightboxStore.js";

Vue.directive("lightbox", {
  bind(el) {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      store.state.img = el.getAttribute("href");
      store.state.imgId = el.getAttribute("id");
      store.state.currentIndex = el.getAttribute("data-currentId");
    });
  }
});
