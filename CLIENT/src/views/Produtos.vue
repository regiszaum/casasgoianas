<template lang="pug">
  div
    .categorias.container.d-flex.w-100
      .col.col-masculina MASCULINA
      .col.col-acessorios ACESSÓRIOS
      .col.col-feminina FEMININA
    .container.categoria-homem.mt-4
      h1 MODA PARA HOMENS
        h3 Seu estilo rústico mais agroboy
        h2.mt-4.mb-4 Camisas
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='masculina' imageName='camisa-gustavolima.png' productName='Camisa G-Lima' :productPrice='120.56')
          ProductCard(categoria='masculina' imageName='camisa-xitaozinho.png' productName='Camisa Xitaozin' :productPrice='100.99')
          ProductCard(categoria='masculina' imageName='camisa-xororo.png' productName='Camisa Xororo' :productPrice='220.00')
        h2.mt-4.mb-4 Calças
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='masculina' imageName='calca1.png' productName='Calça G-Lima' :productPrice='180.00')
          ProductCard(categoria='masculina' imageName='calca2.png' productName='Calça Xitaozin' :productPrice='149.99')
          ProductCard(categoria='masculina' imageName='calca3.png' productName='Calça Xororo' :productPrice='130.00')
        h2.mt-4.mb-4 Botas
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='masculina' imageName='bota1.jpg' productName='Bota G-Lima' :productPrice='420.00')
          ProductCard(categoria='masculina' imageName='bota2.jpg' productName='Bota Xitaozin' :productPrice='380.00')
          ProductCard(categoria='masculina' imageName='bota3.png' productName='Bota Xororo' :productPrice='299.00')
    .container.categoria-mulher.mt-4
      h1 MODA PARA MULHERES
        h3 Seu estilo rústico mais agrogirl
        h2.mt-4.mb-4 Camisas
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='feminina' imageName='camisa1.png' productName='Camisa Marilia' :productPrice='199.99')
          ProductCard(categoria='feminina' imageName='camisa2.png' productName='Camisa Paula' :productPrice='100.00')
          ProductCard(categoria='feminina' imageName='camisa3.png' productName='Camisa Bruna' :productPrice='179.99')
        h2.mt-4.mb-4 Calças
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='feminina' imageName='calca1.png' productName='Calça Marilia' :productPrice='400.00')
          ProductCard(categoria='feminina' imageName='calca2.png' productName='Calça Paula' :productPrice='250.00')
          ProductCard(categoria='feminina' imageName='calca3.png' productName='Calça Bruna' :productPrice='320.00')
        h2.mt-4.mb-4 Botas
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='feminina' imageName='botina1.png' productName='Botina Marilia' :productPrice='500.00')
          ProductCard(categoria='feminina' imageName='botina2.png' productName='Botina Paula' :productPrice='400.00')
          ProductCard(categoria='feminina' imageName='botina3.jpeg' productName='Botina Bruna' :productPrice='300.00')
    .container.categoria-acessorio.mt-4
      h1 ACESSÓRIOS
        h3 O melhor do estilo country
        h2.mt-4.mb-4 Cintos
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='acessorios' imageName='cinto1.png' productName='Cinto Peão' :productPrice='199.99')
          ProductCard(categoria='acessorios' imageName='cinto2.png' productName='Camisa Fazendeiro' :productPrice='100.00')
          ProductCard(categoria='acessorios' imageName='cinto3.png' productName='Camisa Vaqueiro' :productPrice='179.99')
        h2.mt-4.mb-4 Chapéus
        .product-space.d-flex.justify-content-center
          ProductCard(categoria='acessorios' imageName='chapeu1.png' productName='Chapeu Peão' :productPrice='400.00')
          ProductCard(categoria='acessorios' imageName='chapeu2.png' productName='Chapeu Vaqueiro' :productPrice='250.00')
          ProductCard(categoria='acessorios' imageName='chapeu3.png' productName='Chapeu Salém' :productPrice='320.00')
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
import Category from '@/components/Category.vue';

export default {
  components: {
    ProductCard,
    Category,
  },
};
</script>

<style lang="stylus" scoped>

</style>
