import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    usuario: {
      carrinho: [],
      totalToPay: 0,
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload.products;
    },
    ADD_PRODUCT_TO_CART(state, newProduct) {
      const alreadyInIndex = state.usuario.carrinho.findIndex((item) => item.productId === newProduct.productId);

      if (alreadyInIndex !== -1) {
        state.usuario.carrinho[alreadyInIndex].qtd += newProduct.qtd;
        state.usuario.carrinho[alreadyInIndex].totalPrice += newProduct.totalPrice;
      } else {
        state.usuario.carrinho.push(newProduct);
      }

      console.log(state.usuario.carrinho);

      /* SET_TOTAL_TO_PAY */
      state.usuario.totalToPay = 0;
      state.usuario.carrinho.forEach((item) => {
        state.usuario.totalToPay += item.totalPrice;
      });

      console.log(state.usuario.totalToPay);
    },
    REMOVE_PRODUCT_FROM_CART(state, productId) {
      const index = state.usuario.carrinho.findIndex((product) => product.productId === productId);
      if (index !== -1) state.usuario.carrinho.splice(index, 1);

      /* SET_TOTAL_TO_PAY */
      state.usuario.totalToPay = 0;
      state.usuario.carrinho.forEach((item) => {
        state.usuario.totalToPay += item.totalPrice;
      });

      console.log(state.usuario.totalToPay);
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/produtos/').then((res) => res.json()).then((result) => {
          commit('SET_PRODUCTS', { products: result });
          resolve();
        }).catch((err) => {
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
    },
    getTotalToPay(state) {
      return state.usuario.totalToPay;
    }
  },
  modules: {
  },
});
