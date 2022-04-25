import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    usuario: {
      carrinho: [],
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload.products;
    },
    ADD_PRODUCT_TO_CART(state, newProduct) {
      for (let i = 0; i < state.usuario.carrinho.length; i += 1) {
        if (state.usuario.carrinho[i].productId === newProduct.productId) {
          state.usuario.carrinho[i].qtd += newProduct.qtd;
          return;
        }
      }
      state.usuario.carrinho.push(newProduct);
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
    /* eslint-disable */
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getCartProducts(state) {
      return state.usuario.carrinho;
    }
  },
  modules: {
  },
});
