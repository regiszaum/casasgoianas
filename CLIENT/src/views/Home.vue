<template lang='pug'>
  .home
    HomeCorousel
    h1.mt-4.mb-4 Produtos
    .product-space.d-flex.justify-content-center
      ProductCard(categoria='feminina' imageName='botina1.png' productName='Botina Cinza' :productPrice='200.56')
      ProductCard(categoria='feminina' imageName='botina2.png' productName='Botina Azul' :productPrice='500.45')
      ProductCard(categoria='feminina' imageName='calca2.png' productName='Calça jeans' :productPrice='600.65')
      ProductCard(categoria='feminina' imageName='calca1.png' productName='Calça jeans' :productPrice='800.00')
    h1.mt-4.mb-4 Categorias
    .category-space.d-flex.justify-content-center
      Category(imageName='BotinasC.png' categoryName='Botinas')
      Category(imageName='CalcasC.png' categoryName='Calcas')
      Category(imageName='CamisasC.png' categoryName='Camisas')
</template>

<script>
import HomeCorousel from '@/components/HomeCorousel.vue';
import ProductCard from '@/components/ProductCard.vue';
import Category from '@/components/Category.vue';

export default {
  components: {
    HomeCorousel,
    ProductCard,
    Category,
  },
};
</script>

<style scoped lang='stylus'>
.product-space
  width: 100%
  height: auto
  margin-bottom: 20px
</style>
