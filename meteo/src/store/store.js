import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  meteo: {
    city: "rennes",
    data: {}
  }
};
const mutations = {
  ADD_METEO: (state, city, data) => {
    state.meteo.city = city;
    state.meteo.data = data;
  }
};
const getters = {
  getMeteo: state => {
    return state.meteo;
  }
};
const actions = {
  changeMeteo: (store, city, data) => {
    console.log(city, data);
    store.commit("ADD_METEO", city, data);
  }
};

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
});

export default store;
