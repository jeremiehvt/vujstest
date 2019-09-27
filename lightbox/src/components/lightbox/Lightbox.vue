<template>
  <div>
    <div v-if="id">
      <img :src="'https://picsum.photos/id/'+id+'/150/150'" alt="photo" />
      <br />
      <a :href="url">source de l'image</a>
      <br />
      <button @click="prev">previous</button>
      <button @click="next">next</button>
    </div>
  </div>
</template>
<script>
import "./lightboxDirective";
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
  computed: {
    url() {
      return this.state.img;
    },
    id() {
      return this.state.imgId;
    },
    currentIndex() {
      return this.state.currentIndex;
    }
  },
  methods: {
    prev() {
      this.state.imgId--;
      this.state.currentIndex--;
      if (this.currentIndex < 0) {
        this.state.imgId = this.imgsIndex[this.imageCount() - 1];
        this.state.currentIndex = this.imageCount() - 1;
      }
    },
    next() {
      this.state.imgId++;
      this.state.currentIndex++;
      if (this.currentIndex > this.imageCount() - 1) {
        this.state.imgId = this.imgsIndex[0];
        this.state.currentIndex = 0;
      }
    },
    imageCount() {
      return this.imgsIndex.length;
    }
  }
};
</script>
<style src="../../assets/scss/style.scss" lang="scss"></style>