var pantalla = document.getElementsByClassName("pantalla"); // Me devuelve una LISTA con las etiquetas que tengan una clase y su valor sea "pantalla".
const teclas = document.getElementsByName("tecla");

//console.log(pantalla, teclas);

const operadores = document.getElementsByName("operador");
const borrar = document.getElementsByName("borrar");
const igual = document.getElementsByName("igual");

var operacion = "";
var operandoActual = "";
var operandoAnterior = "";
var resultado = ""; 

teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        operandoActual += tecla.innerText;
        pantalla[0].textContent = operandoActual;
    })

    //console.log(tecla)

});

operadores.forEach(function(operador) {
    operador.addEventListener("click", function() {
        operacion = operador.innerText; // me devuelve un string.
        operandoAnterior = operandoActual;
        operandoActual = "";

        //console.log(operandoAnterior, operandoActual)
    });
});

// elemento = [1,2,3]
// for elemn in elementos:
//     print(elemen)


igual.forEach(function(result) {
    result.addEventListener("click", function() {
        switch (operacion) {
            case "+":
                resultado = parseFloat(operandoAnterior) + parseFloat(operandoActual);
                break;
            case "-":
                resultado = parseFloat(operandoAnterior) - parseFloat(operandoActual);
                break;
        }
        pantalla[0].textContent = resultado 
    });




})

borrar.forEach(function(eliminado) {
    eliminado.addEventListener("click", function() {
        pantalla[0].textContent = ""; 
        operandoAnterior = "";
        operandoActual = "";
    });
})   
