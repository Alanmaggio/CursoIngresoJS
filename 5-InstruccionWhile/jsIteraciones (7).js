function mostrar() {
	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';


	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese numero"));

	while (isNaN(numero)) {
		numero = alert("Escribe un numero valido");

	}	contador++
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar?");
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN