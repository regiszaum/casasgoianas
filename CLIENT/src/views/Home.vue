<template lang='pug'>
  .home
    HomeCorousel
    h1.mt-4.mb-4 Produtos
    .product-space.d-flex.justify-content-center
      ProductsCorousel(:products='nProducts(9)')
    h1.mt-4.mb-4 Categorias
    .category-space.d-flex.justify-content-center
      Category(imageName='BotinasC.png' categoryName='Botinas')
      Category(imageName='CalcasC.png' categoryName='Calcas')
      Category(imageName='CamisasC.png' categoryName='Camisas')
    CartModal
</template>

<script>
import HomeCorousel from '@/components/HomeCorousel.vue';
import ProductsCorousel from '@/components/ProductsCorousel.vue';
import ProductCard from '@/components/ProductCard.vue';
import Category from '@/components/Category.vue';
import { mapGetters, mapActions } from 'vuex';
import CartModal from '@/components/CartModal.vue';

export default {
  components: {
    HomeCorousel,
    ProductCard,
    Category,
    ProductsCorousel,
    CartModal,
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
    nProducts(n) {
      return this.getProducts.slice(0, n);
    },
  },
};
</script>

<style scoped lang='stylus'>
.product-space
  width: 100%
  height: auto
  margin-bottom: 20px
</style>
