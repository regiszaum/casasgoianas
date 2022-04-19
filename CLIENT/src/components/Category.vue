<template lang='pug'>
  .category-card.d-flex.flex-column.text-start
    .img-card
        img(
            :src='require(`@/assets/${imageName}`)'
            alt='...'
        )
    span.ps-4.fw-bold {{productName}}
</template>

<script>

export default {
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
};

</script>

<style scoped lang='stylus'>
  .img-card
    margin: 0 20px 7px 20px
    overflow: hidden
    width: 550px
    height: 700px
    border-radius: 7px
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
</style>
