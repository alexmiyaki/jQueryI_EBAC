$(document).ready(() => {
    $('#colecoes').on('click', () => {
        $('#colecoesMenu').show()
    })
    $('#contato').on('click', () => {
        $('#contatoMenu').show()
    })

    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').hide()
    })
})