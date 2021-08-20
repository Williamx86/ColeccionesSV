var counter = 1;
var reiniciar = 4;

const tiempo = setInterval(function () {
    if (counter <= 4) {
        document.getElementById('radio' + counter).checked = true;
        counter++;
    } else if (reiniciar > 1) {
        document.getElementById('radio' + reiniciar).checked = true;
        reiniciar--;
    } else {
        counter = 1;
    }
}, 4300);
