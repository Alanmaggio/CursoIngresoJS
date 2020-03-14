function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)) {
			numero = prompt("Escribe un numero valido");
		}
		contador++
		respuesta = prompt("Desea continuar?");

		if (numero < 0) {
			negativo = negativo * numero;
		} else {
			positivo = positivo + numero;
		}
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN

/* 14/03/20--- hecho por mi, corregido con el git de marina, 
correccion: asignacion de la operacion al acumulador (negativo positivo)
*/