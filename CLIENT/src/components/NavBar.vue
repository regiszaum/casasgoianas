<template lang='pug'>
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.container-fluid
    .container-fluid
      button.navbar-toggler(
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      )
        span.navbar-toggler-icon
      router-link.navbar-brand(to='/')
        img.icon(src='@/../public/android-chrome-192x192.png')
      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.me-auto.mb-2.mb-lg-0
          li.nav-item
            router-link.nav-link.active(to='/') Home
          li.nav-item
            router-link.nav-link(to='/produtos') Produtos
        i.bi.bi-cart3.d-flex(
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click='showCartProducts'
        )
        //-li.nav-item.dropdown
        //-  a#navbarDropdown.nav-link.dropdown-toggle(
        //-    href='#' role='button'
        //-    data-bs-toggle='dropdown'
        //-    aria-expanded='false')
        //-    | FEMININA
        //-  ul.dropdown-menu(aria-labelledby='navbarDropdown')
        //-    li
        //-      a.dropdown-item(href='#') Action
        //-    li
        //-      a.dropdown-item(href='#') Another action
        //-    li
        //-      hr.dropdown-divider
        //-    li
        //-      a.dropdown-item(href='#') Something else here
        //-li.nav-item
        //-  a.nav-link.disabled(href='#' tabindex='-1' aria-disabled='true') Disabled
      //-form.d-flex
      //-  input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
      //-  button.btn.btn-outline-success(type='submit') Search
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    showCartProducts() {
      console.log(this.getCartProducts);
    },
  },
  computed: {
    ...mapGetters(['getCartProducts']),
  },
};
</script>

<style scoped lang='stylus'>
.icon
  width: auto
  height: 70px
.navbar
  background-color: var(--verde-escuro) !important
a.nav-link
  color: var(--bege) !important
i.bi.bi-cart3
  color: var(--bege)
  font-size: 1.563rem
  display flex !important
  margin-left: 62.5rem
i.bi.bi-cart3:hover
  color: var(--verde)
.bi-cart3
  cursor: pointer
</style>
