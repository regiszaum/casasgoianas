<template lang='pug'>
  .prduct-card.d-flex.flex-column.text-start(
    @click='infoPage'
  )
    .img-card
      img(
        :src='image'
        alt='...'
      )
    span.ps-4.fw-bold {{productName}}
    span.ps-4 R$ {{productPrice}}
</template>

<script>

export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
  },
  methods: {
    infoPage() {
      this.$router.push({ name: 'Produto', params: { id: this.productId } });
    },
  },
};

</script>

<style scoped lang='stylus'>
  .prduct-card
    cursor: pointer
    .img-card
      margin: 0 20px 7px 20px
      overflow: hidden
      width: 400px
      height: 400px
      border: solid 0.3px black
      border-radius: 7px
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      img
        position: relative
        left: -30px
        width: auto
        height: 450px
</style>
