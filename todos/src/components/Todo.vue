<template>
  <b-container class="todoapp">
    <b-row>
      <b-col cols="12" align-v="center">
        <header class="todoheader">
          <h2 id="todo-title">{{title}}</h2>
          <b-form-input
            type="text"
            class="new-todo"
            placeholder="AJouter une tache"
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
          <b-button
            variant="danger"
            class="mt-3"
            size="sm"
            @click="deleteAllTodo"
            v-show="getTodo > 0"
          >supprimer toutes les taches</b-button>
          <b-form-checkbox v-model="allDone"></b-form-checkbox>
        </header>
        <div class="main">
          <b-list-group class="todo-list py-3">
            <b-list-group-item
              v-for="(todo,index) in filteredTodos"
              :key="index"
              class="todo-list__item"
              :class="{completed: todo.completed, editing: todo === editing}"
            >
              <!-- <b-container class="todo-list__item">
              <b-row class="view justify-content-center todo-list__item" align-v="center">-->
              <b-form-checkbox v-model="todo.completed"></b-form-checkbox>
              <label class="my-0 mx-2" @dblclick="editTodo(todo)">{{todo.name}}</label>
              <b-button
                class="clear-completed input-small"
                size="sm"
                variant="danger"
                @click.prevent="deleteCompleted"
                v-show="doneTodo"
              >supprimer la tache</b-button>
              <!-- </b-row>
              </b-container>-->
              <input
                type="text"
                class="edit"
                v-model="todo.name"
                @keyup.enter="doneEdit"
                @blur="doneEdit"
                @keyup.escape="cancelEdit(todo)"
                v-show="todo === editing"
                v-focus="todo === editing"
              />
            </b-list-group-item>
          </b-list-group>
        </div>
        <footer class="todo-count" v-show="hasTodos">
          <strong>reste à faire : {{remaining}}</strong>
          <b-list-group>
            <b-list-group-item
              href="#"
              :class="{selected: filter === 'all'}"
              @click.prevent="filter='all'"
            >toutes les taches</b-list-group-item>
            <b-list-group-item
              href="#"
              :class="{selected: filter === 'active'}"
              @click.prevent="filter='todo'"
            >toutes les taches actives</b-list-group-item>
            <b-list-group-item
              href="#"
              :class="{selected: filter === 'done'}"
              @click.prevent="filter='done'"
            >toutes les taches finies</b-list-group-item>
          </b-list-group>
          <b-button
            variant="danger"
            class="mt-3"
            size="sm"
            @click.prevent="deleteCompleted"
            v-show="getTodo > 0"
          >supprimer les taches complétées</b-button>
        </footer>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Vue from "vue";
import Store from "./TodoStore.js";
import Vuex from "vuex";
global.v = Vuex;
export default {
  store: Store,
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      title: "Todolist",
      /* todos: [
        {
          name: null,
          completed: false
        }
      ], */
      newTodo: "",
      filter: "all",
      editing: null,
      oldTodo: null
    };
  },
  watch: {
    value(value) {
      this.todos = value;
    }
  },
  methods: {
    ...Vuex.mapActions({ addTodoStore: "addTodo", deleteTodo: "deleteTodo" }),
    addTodo() {
      this.addTodoStore(this.newTodo);
      this.newTodo = "";
    },

    // addTodo() {
    //   this.todos.push({
    //     name: this.newTodo,
    //     completed: false
    //   });
    //   this.newTodo = "";
    // },
    deleteTodo(todo) {
      console.log(this.todos);
      this.todos = this.todos.filter(i => i != todo);
    },
    deleteAllTodo() {
      this.todos = [];
      this.$emit("input", this.todos);
    },
    deleteCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
      this.$emit("input", this.todos);
    },
    editTodo(todo) {
      this.editing = todo;
      this.oldTodo = todo.name;
    },
    doneEdit() {
      this.editing = null;
    },
    cancelEdit(todo) {
      this.editing.name = this.oldTodo;
      this.doneEdit();
    }
  },
  computed: {
    ...Vuex.mapGetters([
      "todos",
      "remainingTodosCount",
      "completedTodosCount",
      "completedTodos",
      "remainingTodos"
    ]),
    remaining() {
      // return this.todos.filter(todo => !todo.completed).length;
    },
    doneTodo() {
      return this.todos.filter(todo => todo.completed).length;
    },
    filteredTodos() {
      if (this.filter === "todo") {
        return this.remainingTodos;
      } else if (this.filter === "done") {
        return this.completedTodos;
      }
      // return this.todos;
    },
    getTodo() {
      // return this.todos.length;
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach(todo => {
          todo.completed = value;
        });
      }
    },
    hasTodos() {
      // return this.todos.length > 0;
    }
  },
  directives: {
    focus(el, value) {
      if (value) {
        Vue.nextTick(_ => {
          el.focus();
        });
      }
    }
  }
};
</script>
<style src="../assets/style/todos.scss" lang="scss"></style>