<template lang="pug">
  div#checkout-body
    h1 Checkout
    .d-flex.flex-column
      CartItem.mt-2(
        v-if='items'
        v-for='item in items'
        :product='getProductById(item.productId)'
        :productQtd='item.qtd'
      )
    .checkout-footer
      button.btn.btn-secondary(type='button' data-bs-dismiss='modal') Fechar
      button.btn.btn-primary(type='button') Finalizar
</template>
<script>
import CartItem from '@/components/CartItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = this.getCartProducts;
  },
  computed: {
    ...mapGetters([
      'getCartProducts',
      'getProductById',
    ]),
  },
};
</script>

<style lang="stylus" scoped>
#checkout-body
  background-color: var(--verde)
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .checkout-footer
    margin-top: 5%
    margin-bottom: 5%
    display: flex !important
    flex-direction: row !important
    button
      padding: 0.75rem
      justify-content: space-between
      margin-right: 5%
  .card
    margin-top: 1%
    background-color: var(--bege)
    color: var(--verde-escuro)
    font-weight: bold
</style>
