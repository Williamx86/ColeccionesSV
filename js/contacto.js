var boton_wha = document.querySelector(".btn-cerrar-w");
var menu_wha = document.querySelector(".ir-arriba");

boton_wha.addEventListener("click", cerrarmenu);

function cerrarmenu() {
    menu_wha.classList.toggle("ver_menu_wha");
}