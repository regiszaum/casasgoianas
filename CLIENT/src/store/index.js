import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
  },
  mutations: {
  },
  actions: {
    getProducts() {
      fetch('http://localhost:3000/produtos/').then((res) => res.json()).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  modules: {
  },
});
