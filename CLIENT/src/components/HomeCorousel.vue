<template lang='pug'>
  #home-carousel.carousel.carousel-dark.slide(data-bs-ride='carousel')
    .carousel-indicators
      button.nav-btn.active(
        type='button'
        data-bs-target='#home-carousel'
        data-bs-slide-to='0'
        aria-current='true'
        aria-label='Slide 1'
      )
      button.nav-btn(
        type='button'
        data-bs-target='#home-carousel'
        data-bs-slide-to='1'
        aria-label='Slide 2'
      )
      button.nav-btn(type='button'
      data-bs-target='#home-carousel'
      data-bs-slide-to='2'
      aria-label='Slide 3'
    )
    .carousel-inner
      .carousel-item.active(data-bs-interval='3000')
        img.w-100(
          src='@/assets/cowboybootsL.jpg'
          alt='...'
          style='max-width: 1920px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 First slide label
        //-  p Some representative placeholder content for the first slide.
      .carousel-item(data-bs-interval='3000')
        img.d-block.w-100(
          src='@/assets/cowboyL.jpg'
          alt='...'
          style='position: relative; top: -150px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 Second slide label
        //-  p Some representative placeholder content for the second slide.
      .carousel-item(data-bs-interval='3000')
        img.w-100(
          src='@/assets/cowboy2L.jpg'
          alt='...'
          style='position: relative; top: -200px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 Third slide label
        //-  p Some representative placeholder content for the third slide.
</template>

<style scoped lang='stylus'>
  .carousel-item
    width: 1920px
    height: 925px
    overflow: hidden
  .carousel-dark .carousel-indicators .nav-btn
    background-color: white !important
</style>
