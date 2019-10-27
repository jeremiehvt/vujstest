import Vue from "vue";
import Vuex from "vuex";
import meteoData from "../resources";

Vue.use(Vuex);

const state = {
  meteo: {
    city: "Rennes",
    data: ""
  }
};

const mutations = {
  ADD_METEO: (state, meteo) => {
    state.meteo.city = meteo.city;
    state.meteo.data = meteo.data;
  }
};

const getters = {
  getMeteo: state => {
    return state.meteo;
  }
};

const actions = {
  changeMeteo: (store, meteo) => {
    if (meteo != "") {
      meteoData.meteo = {
        city: meteo.city,
        country_code: "fr"
      };
      store.commit("ADD_METEO", { city: meteo.city, data: meteoData.meteo });
    }
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
