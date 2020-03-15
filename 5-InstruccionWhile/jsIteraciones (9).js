function mostrar() {
	// declarar variables
	var numero;
	var contador = 0;
	var respuesta = 'si';
	var maximo;
	var minimo;

	while (respuesta != 'no') {
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero) || null) {
			numero = prompt("Escribe un numero valido");
		}
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
			contador = 1;
		} else if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}
		respuesta = prompt("Desea continuar?");
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN

/* MAXIMO Y MINIMO UTILISANDO UN IF CON UN FLAG.
 EN MI CASO LO DEJE CON EL NOMBRE "CONTADOR" PARA IGUAL
  ACORDARME QUE UN FLAG ES ESO.

  var flag = 0;
if (flag == 0) {
			maximo = numero;
			minimo = numero;
			flag = 1;
		} else if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}*/
