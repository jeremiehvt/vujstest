import Vue from "vue";
import Vuex from "vuex";
import meteoData from "../resources";

Vue.use(Vuex);

const state = {
  meteo: {
    city: "rennes",
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
    console.log(state.meteo);
    return state.meteo.city;
  }
};

const actions = {
  changeMeteo: (store, meteo) => {
    if (meteo != "") {
      console.log(meteo);
      meteoData.meteo = {
        city: meteo.city,
        country_code: "fr"
      };
      store.commit("ADD_METEO", meteoData.meteo);
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
