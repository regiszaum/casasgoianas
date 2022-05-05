<template lang="pug">
  div.body-checkout.d-flex
    div.form-checkout
      FormCheckout
    div.cart-checkout
      CartItem.mt-2(
            v-if='items'
            v-for='item in items'
            :product='getProductById(item.productId)'
            :productQtd='item.qtd'
          )
    .checkout-footer.d-flex.justify-content-center.pt-5
      button.btn.btn-secondary.my-2(type='button') Fechar
      button.btn.btn-primary.ms-3.my-2(type='button') Finalizar
</template>
<script>
import FormCheckout from '@/components/FormCheckout.vue';
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';

export default {
  components: {
    FormCheckout,
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
.body-checkout
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
  .modal-dialog
      margin-right: 0px
      margin-top: 0px
      margin-bottom: 0px
      height: 100%
      .modal-content
        height: 100%
</style>
