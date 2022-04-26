<template lang="pug">
  div#produtos
    .categorias.d-flex
      button.col.col-masculina(
        @click='showMasculina'
      ) MASCULINA
      button.col.col-acessorios(
        @click='showAcessorios'
      ) ACESSÓRIOS
      button.col.col-feminina(
        @click='showFeminina'
      ) FEMININA
    .container.categoria-homem.mt-4
      h1 MODA PARA HOMENS
        h3 Seu estilo rústico mais agroboy
        h2.mt-4.mb-4 Camisas
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.type'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
        h2.mt-4.mb-4 Calças
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
        h2.mt-4.mb-4 Botas
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
    .container.categoria-mulher.mt-4(
      v-show='showFeminina'
    )
      h1 MODA PARA MULHERES
        h3 Seu estilo rústico mais agrogirl
        h2.mt-4.mb-4 Camisas
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
        h2.mt-4.mb-4 Calças
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
        h2.mt-4.mb-4 Botas
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
    .container.categoria-acessorio.mt-4(
      v-show='showAcessorios'
    )
      h1 ACESSÓRIOS
        h3 O melhor do estilo country
        h2.mt-4.mb-4 Cintos
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
        h2.mt-4.mb-4 Chapéus
        .product-space.d-flex.justify-content-center
          ProductCard(
            v-for='item in items'
            :key='item.id'
            :productId='item.id'
            :categoria='item.type'
            :image='item.imageurl'
            :productName='item.name'
            :productPrice='item.price'
          )
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Category from '@/components/Category.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ProductCard,
    Category,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
    showMasculina() {
      this.items = this.getProducts.filter((product) => product.sex === 'M');
    },
    showFeminina() {
      this.items = this.getProducts.filter((product) => product.sex === 'F');
    },
    showAcessorios() {
      this.items = this.getProducts.filter((product) => product.category === 'accessory');
    },
  },
};
</script>

<style lang="stylus" scoped>
#produtos
  background-color: var(--verde)
  h1
    color: var(--bege)
    font-weight: bold
  button
    background-color: var(--verde-dois)
    &:hover
      background-color: var(--verde)
      border: 2px solid var(--bege)
</style>
