import Vue from "vue";
import store from "./LightboxStore.js";

Vue.directive("lightbox", {
  bind(el) {
    let index = store.addImage(el.getAttribute("href"));
    el.addEventListener("click", function(e) {
      e.preventDefault();
      store.openImg(index);
      store.state.index = el.getAttribute("href");
      store.state.imgId = el.getAttribute("id");
      store.state.currentIndex = el.getAttribute("data-currentId");
    });
  }
});
