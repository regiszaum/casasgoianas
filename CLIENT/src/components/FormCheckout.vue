<template lang="pug">
    div
      .container.contact
          .row
            .col-md-3
              .contact-info
                h2 Dados
                h4 preencha seu dados pessoais nos campos ao lado
            .col-md-9
              .contact-form
                .form-group
                  label.control-label.col-sm-2.d-flex(for='fname') Nome completo:
                  .col-sm-10
                    input#fname.form-control(type='text' placeholder='Digite aqui seu nome completo' name='fname')
                .form-group
                  label.control-label.col-sm-2.d-flex(for='lname') Endereço:
                  .col-sm-10
                    input#lname.form-control(type='text' placeholder='Digite aqui seu endereço' name='lname')
                .form-group
                  label.control-label.col-sm-2.d-flex(for='email') Email:
                  .col-sm-10
                    input#email.form-control(type='email' placeholder='Digite aqui seu email' name='email')
                .form-group
                  label.control-label.col-sm-2.d-flex(for='comment') Observações:
                  .col-sm-10
                    textarea#comment.form-control(rows='5')
                .form-group
                  .col-sm-offset-2.col-sm-10.d-flex
                    button.btn.btn-default.mt-2(type='submit') Enviar
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped>
body
    background-color #25274d

.contact
    padding 4%
    height 400px

.col-md-3
    background-color: var(--verde-escuro)
    padding: 4%
    border-top-left-radius: 0.5rem
    border-bottom-left-radius: 0.5rem

.contact-info
    color: #fff
    margin-top: 10%
    h2
        background-color: var(--verde)
        margin-bottom: 10%
        border-radius: 15px
    h4
        background-color: var(--verde)
        border-radius: 15px

.col-md-9
    background #fff
    padding 3%
    border-top-right-radius 0.5rem
    border-bottom-right-radius 0.5rem

.contact-form
    label
        font-weight 600
    button
        background #25274d
        color #fff
        font-weight 600
        width 25%
        &:focus
            box-shadow none
</style>
