import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [
    {
      name: "first todo",
      completed: true
    }
  ]
};

const mutations = {
  ADD_TODO: (state, name) => {
    state.todos.push({
      name: name,
      completed: false
    });
  },
  DELETE_TODO: (state, todo) => {
    state.todos.filter(i => i !== todo);
  }
};

const getters = {
  todos: state => {
    state.todos;
  },
  completedTodos: state => {
    state.todos.filter(todo => todo.completed);
  },
  remainingTodos: state => {
    state.todos.filter(todo => !todo.completed);
  },
  remainingTodosCount: state => {
    getters.remainingTodos(state).length;
  },
  completedTodosCount: state => {
    getters.completedTodos(state).length;
  }
};

const actions = {
  addTodo: (store, name) => {
    store.commit("ADD_TODO", name);
  },
  deleteTodo: (store, todo) => {
    store.commit("DELETE_TODO", todo);
  }
};

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
});

global.store = store;

export default store;
