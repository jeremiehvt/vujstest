<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{todos}}
    <todo class="mt-4" v-model="todos"></todo>
    <todo class="mt-4" v-model="todos"></todo>
    <todo class="mt-4" v-model="todos"></todo>

    <button @click="addTodo">ajouter une todo</button>
  </div>
</template>

<script>
// bootstrap installation
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Todo from "./components/Todo.vue";

export default {
  name: "app",
  data() {
    return {
      todos: [
        {
          name: "demo",
          completed: true
        }
      ]
    };
  },
  components: {
    Todo
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: "me",
        completed: false
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
