var boton = document.querySelector(".logo_list");
var menu = document.querySelector(".menu_movil");

boton.addEventListener("click", activarmenu);

function activarmenu() {
    menu.classList.toggle("ver_menu");
}

if (screen.width < 1100) {
    var desplegable = document.querySelector(".desplegable");

    desplegable.addEventListener("click", enlace);

    function enlace() {
        window.location.href = 'https://williamx86.github.io/ColeccionesSV/validacion.html';
    }

}

$(document).ready(function () {

    $('.subir').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.subir').slideDown(300);
        } else {
            $('.subir').slideUp(300);
        }
    });

});