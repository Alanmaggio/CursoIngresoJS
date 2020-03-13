function mostrar() {
	/*  //parte de cero y cuenta
	  var contador=0;
	  //va a acumular los numeros que se ingresen
	  var acumulador=0;
	  // el numero va a hacer el que tome del prompt
	  var  numero ;
	  var  promedio;
	  //limito la cantidad 
	  var  interaciones = 5 ;//cantidad de vueltas
  
  
	  while  ( contador < interaciones )
		  {
			  contador ++ ;
			  numero = prompt ( "Ingrese número" ) ;
			  numero = parseInt ( numero ) ;
			  acumulador = acumulador + numero ;
		  }
	  promedio = acumulador / contador ;
  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/5; */


	var numero;
	var promedio;
	var contador = 0;
	var promedio;
	var acumulador = 0;



	while (contador < 5) {
		contador++
		numero = parseInt(prompt("Ingrese numero"));
		acumulador = acumulador + numero;

	}
	document.getElementById("suma").value = acumulador
	document.getElementById("promedio").value = acumulador /5

//este lo hise yo

}//FIN DE LA FUNCIÓN