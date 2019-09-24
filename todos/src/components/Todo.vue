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
              :class="{completed: todo.completed}"
            >
              <!-- <b-container class="todo-list__item">
              <b-row class="view justify-content-center todo-list__item" align-v="center">-->
              <b-form-checkbox v-model="todo.completed"></b-form-checkbox>
              <label class="my-0 mx-2">{{todo.name}}</label>
              <b-button
                class="input-small"
                size="sm"
                variant="danger"
                @click.prevent="deleteTodo(todo)"
              >supprimer la tache</b-button>
              <!-- </b-row>
              </b-container>-->
            </b-list-group-item>
          </b-list-group>
        </div>
        <footer class="todo-count">
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
        </footer>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      title: "Todo",
      todos: [
        {
          name: "test",
          completed: false
        }
      ],
      newTodo: "",
      filter: "all"
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      console.log(this.todos);
      this.todos = this.todos.filter(i => i != todo);
    },
    deleteAllTodo() {
      this.todos = [];
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    filteredTodos() {
      if (this.filter === "todo") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter === "done") {
        return this.todos.filter(todo => todo.completed);
      }
      return this.todos;
    },
    getTodo() {
      return this.todos.length;
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
    }
  }
};
</script>
<style src="../assets/style/todos.scss" lang="scss"></style>