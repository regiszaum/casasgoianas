<template lang='pug'>
  div.card
    .row.h-100
      .col-4.h-100.d-flex.align-items-center.justify-content-center
        img.w-50(
            :src='product.imageurl'
        )
      .col-8.h-100.text-start.p-3.d-flex.flex-column
        span {{product.name}}
        span.mt-2 Qtd: {{productQtd}}
    i.x-icon.bi.bi-x(
        style="font-size: 1.5rem;"
        @click='removeItem'
    )
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
    },
    productQtd: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations(['REMOVE_PRODUCT_FROM_CART']),
    removeItem() {
      this.REMOVE_PRODUCT_FROM_CART(this.product.id);
      console.log('item removido');
    },
  },
};
</script>

<style scoped lang='stylus'>
.card
  width: 450px
  height: 120px
  .row
    --bs-gutter-x: 0
    --bs-gutter-y: 0
  .x-icon
    cursor: pointer
    position: absolute
    top: 0px
    right: 5px
</style>
