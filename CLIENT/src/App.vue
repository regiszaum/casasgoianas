<template lang="pug">
  #app
    #nav
      navbar
    router-view
</template>

<script>
import Navbar from '@/components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
