<template lang='pug'>
  #products-carousel.carousel.carousel-dark.slide(
    v-if='!loading'
    data-bs-ride='carousel'
    )
    button.carousel-control-prev(type='button' data-bs-target='#products-carousel' data-bs-slide='prev')
      span.carousel-control-prev-icon(aria-hidden='true')
      span.visually-hidden Previous
    button.carousel-control-next(type='button' data-bs-target='#products-carousel' data-bs-slide='next')
      span.carousel-control-next-icon(aria-hidden='true')
      span.visually-hidden Next
    .carousel-inner
      .carousel-item(
        v-for='index in nOfCorouselSections'
        :class='{ active: (index == 1) }'
        :key='index'
      )
        .d-flex
          ProductCard(
            v-for='product in products.slice(((index - 1) * 3), ((index - 1) * 3 + 3))'
            :key='product.id'
            :categoria='product.type'
            :image='product.imageurl'
            :productName='product.name'
            :productPrice='product.price'
          )
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: null,
    };
  },
  created() {
    this.loading = true;
  },
  computed: {
    nOfCorouselSections() {
      return Math.ceil((this.products.length / 3));
    },
  },
  watch: {
    products(newValue) {
      if (newValue.length > 0) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang='stylus'>
</style>
