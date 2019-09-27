<template>
  <div>
    <slot></slot>
    <v-btn class="carroussel__nav carroussel__next" @click.prevent="next">suivant</v-btn>
    <v-btn class="carroussel__nav carroussel__prev" @click.prevent="prev">précédent</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      slides: []
    };
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },
  methods: {
    next() {
      this.index++;
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length - 2;
    }
  }
};
</script>
<style src="../assets/scss/caroussel.scss" lang="scss"></style>