<template lang='pug'>
  #exampleModal.modal.fade.right(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
    .modal-dialog
      .modal-content
        .modal-header
          h5#exampleModalLabel.modal-title Carrinho
          button.btn-close(type='button' data-bs-dismiss='modal' aria-label='Close')
        .modal-body.d-flex.flex-column.justify-content-start
          CartItem.mt-2(
            v-if='items'
            v-for='item in items'
            :product='getProductById(item.productId)'
            :productQtd='item.qtd'
          )
        .modal-footer.d-flex.justify-content-between
          .price Total a Pagar: R$ {{getTotalToPay}}
          .buttons
            button.btn.btn-secondary.me-2(type='button' data-bs-dismiss='modal') Fechar
            button.btn.btn-primary(type='button') Concluir Compra
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
      'getTotalToPay',
    ]),
  },
};
</script>

<style scoped lang='stylus'>
#exampleModal
  height: 100vh
  .modal-dialog
    margin-right: 0px
    margin-top: 0px
    margin-bottom: 0px
    height: 100%
    .modal-content
      height: 100%
</style>
