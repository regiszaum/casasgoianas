<template lang='pug'>
  #exampleModal.modal.fade.right(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
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
  height: 100%
  .modal-dialog
    margin-right: 0px;
    margin-top: 0px;
    height: 100%
    .modal-content
      height: 100%
</style>
