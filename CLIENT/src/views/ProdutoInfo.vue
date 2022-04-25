<template lang='pug'>
  .container.pt-4
    .row
      .col-7
        img.card.product-img(:src='produto.imageurl')
      .col-5.text-start.d-flex.flex-column
        h1 {{produto.name}}
        p R$ {{produto.price}}
        .btn-group.w-25(role='group' aria-label='Basic outlined example')
          button.btn.btn-primary.count-btn(
            type='button'
            @click='decreaseCount'
          ) -
          div.btn.btn-outline-primary.count-display {{produtoQtd}}
          button.btn.btn-primary.count-btn(
            type='button',
            @click='increaseCount'
          ) +
        button.btn.btn-secondary.btn-lg.mt-4(type='button') Adicionar ao Carrinho
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      produtoQtd: 1,
      produto: {},
    };
  },
  created() {
    this.produto = this.getProductById(this.$route.params.id);
  },
  methods: {
    increaseCount() {
      this.produtoQtd += 1;
    },
    decreaseCount() {
      if (this.produtoQtd !== 1) this.produtoQtd -= 1;
    },
  },
  computed: {
    ...mapGetters(['getProductById']),
  },
};
</script>

<style scoped lang='stylus'>
  .product-img
    width: 500px
    height: auto
  .count-btn
    padding-right: 10px
    padding-left: 10px
  .count-display:hover
    background-color: white
    color: #0d6efd
</style>
