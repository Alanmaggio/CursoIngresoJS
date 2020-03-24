function mostrar() {
	//declarar contadores y variables 
	var promPositivo;
	var promNegativo;
	var diferencia;
	var numero;
	var contador = 0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var respuesta = "si";

	//validacion del numero ingresado
	while (respuesta != "no") {
		numero = parseInt(prompt("Ingrese un numero :"));
		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido :");
		}
		// cargo condiciones para los contadores
		if (numero > 0) {
			acumuladorPositivos = acumuladorPositivos + numero;
			cantPositivos++
			var resto = numero % 2; //para sacar el numero par
			if (resto == 0) {
				cantPares++
			}//llave del primer if para que entren los
		} else if (numero < 0) {
			acumuladorNegativos = acumuladorNegativos + numero;
			cantNegativos++
		} else {
			cantCeros++
		}
		contador++
		respuesta = prompt("Desea continuar con el ingreso?...Escriba no para salir");
	}

	promPositivo = acumuladorPositivos / cantPositivos;
	promNegativo = acumuladorNegativos / cantNegativos;
	diferencia = acumuladorPositivos - acumuladorNegativos;
	//imprimo en pantalla los datos
	document.write("La suma de los negativos : " + acumuladorNegativos + "<br>" +
		"La suma de los positivos es : " + acumuladorPositivos + "<br>" +
		"La cantidad de positivos es : " + cantPositivos + "<br>" +
		"La cantidad de negativos es : " + cantNegativos + "<br>" +
		"La cantidad de ceros es : " + cantCeros + "<br>" +
		"La cantidad de numeros pares es : " + cantPares + "<br>" +
		"Promedio de positivos : " + promPositivo + "<br>" +
		"Promedio de negativos : " + promNegativo + "<br>" +
		"Diferencia entre positivos y negativos : " + diferencia);




}//FIN DE LA FUNCIÓN