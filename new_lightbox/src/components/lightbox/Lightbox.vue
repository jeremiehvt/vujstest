<template>
  <div class="lightbox" v-if="image">
    <lightbox-image v-bind:image="image"></lightbox-image>
    <div class="lightbox__close" @click="close"></div>
    <p style="color:red;">{{image}}</p>
    <button class="prev" @click.prevent.stop="prev">prev</button>
    <button class="next" @click.prevent.stop="next">next</button>
  </div>
</template>
<script>
import "./lightboxDirective";
import LightboxImage from "./lightboxImage.vue";
import store from "./LightboxStore";
export default {
  data() {
    return {
      state: store.state
    };
  },
  props: {
    imgsIndex: { type: Array }
  },
  components: {
    LightboxImage
  },
  computed: {
    id() {
      return this.state.imgId;
    },
    currentIndex() {
      return this.state.currentIndex;
    },
    image() {
      let result;
      if (this.state.index !== false) {
        result = this.state.imgs[this.currentIndex];
      }
      return result;
    }
  },
  methods: {
    close() {
      store.close();
    },
    next() {
      store.next();
    },
    prev() {
      store.prev();
    }
  }
};
</script>
<style src="../../assets/scss/style.scss" lang="scss"></style>