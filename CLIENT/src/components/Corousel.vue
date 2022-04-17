<template lang='pug'>
  #home-carousel.carousel.carousel-dark.slide(data-bs-ride='carousel')
    .carousel-indicators
      button.active(
        type='button'
        data-bs-target='#home-carousel'
        data-bs-slide-to='0'
        aria-current='true'
        aria-label='Slide 1'
      )
      button(
        type='button'
        data-bs-target='#home-carousel'
        data-bs-slide-to='1'
        aria-label='Slide 2'
      )
      button(type='button'
      data-bs-target='#home-carousel'
      data-bs-slide-to='2'
      aria-label='Slide 3'
    )
    .carousel-inner
      .carousel-item.active(data-bs-interval='1000')
        img.w-100(
          src='@/assets/bota1D.png'
          alt='...'
          style='max-width: 400px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 First slide label
        //-  p Some representative placeholder content for the first slide.
      .carousel-item(data-bs-interval='3000')
        img.w-100(
          src='@/assets/bota1E.png'
          alt='...'
          style='max-width: 400px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 Second slide label
        //-  p Some representative placeholder content for the second slide.
      .carousel-item(data-bs-interval='1000')
        img.w-100(
          src='@/assets/bota1F.png'
          alt='...'
          style='max-width: 400px;'
        )
        //-.carousel-caption.d-none.d-md-block
        //-  h5 Third slide label
        //-  p Some representative placeholder content for the third slide.
    button.carousel-control-prev(
      type='button'
      data-bs-target='#home-carousel'
      data-bs-slide='prev'
    )
      span.carousel-control-prev-icon(aria-hidden='true')
      span.visually-hidden Previous
    button.carousel-control-next(
      type='button'
      data-bs-target='#home-carousel'
      data-bs-slide='next'
    )
      span.carousel-control-next-icon(aria-hidden='true')
      span.visually-hidden Next
</template>

<style scoped lang='stylus'>
  #home-carousel
    margin-top: 20px
</style>
