import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload.products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/produtos/').then((res) => res.json()).then((result) => {
          commit('SET_PRODUCTS', { products: result });
          resolve();
        }).catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  modules: {
  },
});
