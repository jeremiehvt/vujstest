<template class="ui message sucess">
  <div>
    <transition name="fade">
      <div class="ui message sucess" v-if="visible">{{message}}</div>
    </transition>
    <button @click="toggle">bouton</button>
    <ul>
      <transition-group name="bounce">
        <li v-for="item in items" :key="item">{{item}}</li>
      </transition-group>
    </ul>
    <button @click="add">ajouter</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      message: "salut",
      items: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    add: function() {
      this.items.push(Math.random());
    },
    toggle: function() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
  transform: translateX(80px);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>