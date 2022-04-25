<template lang='pug'>
  #exampleModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
    .modal-dialog
      .modal-content
        .modal-header
          h5#exampleModalLabel.modal-title Modal title
          button.btn-close(type='button' data-bs-dismiss='modal' aria-label='Close')
        .modal-body
          | ...
        .modal-footer
          button.btn.btn-secondary(type='button' data-bs-dismiss='modal') Close
          button.btn.btn-primary(type='button') Save changes
</template>

<style scoped lang='stylus'>
  #exampleModal
    position: fixed
    right: 0
    left: auto
    top: -30px
    margin: auto
    width: 320px
    height: 100vh !important
    .modal-dialog  .modal-content
      height: 100vh !important
</style>
