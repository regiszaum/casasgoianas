import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Produtos from '../views/Produtos.vue';
import Produto from '../views/ProdutoInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos,
  },
  {
    path: '/produto/:id',
    name: 'Produto',
    component: Produto,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
