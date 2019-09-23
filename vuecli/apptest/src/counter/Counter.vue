<template>
  <div class="counter">
    <div>{{count}}</div>
    <div class="counter__button" @click="increment">incrementer</div>
  </div>
</template>
<script>
import store from "../store/NotificationsStore";
export default {
  data() {
    return {
      state: store.state
    };
  },
  computed: {
    count: function() {
      return this.state.count;
    }
  },
  methods: {
    increment: function() {
      store.increment();
    }
  }
};
</script>
<style src="./scss/style.scss" lang="scss"></style>