<template>
  <div @click.stop>
    <img :src="image" class="lightbox__image" :style="style" />
    <div v-if="loading" class="lightbox__loading">Chargement</div>
  </div>
</template>
<script>
export default {
  props: {
    image: String
  },
  data() {
    return {
      loading: true,
      src: false,
      style: {}
    };
  },
  methods: {
    resizeImage(image) {
      if (
        image.width > window.innerWidth ||
        image.height > window.innerHeight
      ) {
        let ratio = image.width / image.height;
        let wRatio = window.innerWidth / window.innerHeight;

        if (ratio > wRatio) {
          image.width = window.innerWidth;
          image.height = image.width / ratio;
        } else {
          image.height = window.innerHeight;
          image.width = image.height * ratio;
        }
        this.style = {
          width: image.width + "px",
          height: image.height + "px",
          top: (window.innerHeight - image.height) * 0.5 + "px",
          left: (window.innerWidth - image.width) * 0.5 + "px"
        };
      }
    }
  },
  mounted: function() {
    let image = new window.Image();
    image.onload = () => {
      this.loading = false;
      this.src = this.image;
      this.resizeImage(image);
    };
    image.src = this.image;
    this.resizeEvent = () => {
      this.resizeImage(image);
    };

    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  }
};
</script>
<style lang="scss">
</style>