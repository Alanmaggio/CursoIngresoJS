function mostrar() {
    var numUno = parseInt(prompt("Ingrese el primer numero"));
    var numDos = parseInt(prompt("Ingrese el segundo numero"));
    var operacionResta = numUno - numDos;
    var operacionsuma = numUno + numDos;
    var resultado;

    if (numUno == numDos) {
        alert("los numeros son iguales :" + numUno + numDos);

    } else if (numUno > numDos) {
        alert("los numeros son iguales :" + operacionResta);
        resultado = operacionResta;
    }
    else if (numUno < numDos) {
        alert("los numeros son iguales :" + operacionsuma);
        resultado = operacionsuma;
    }
}
if (resultado > 10) {
    alert("el resultado es : " + resultado);
}
