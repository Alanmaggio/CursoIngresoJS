function mostrar()
{
    //parte de cero y cuenta
	var contador=0;
	//va a acumular los numeros que se ingresen
	var acumulador=0;
	// el numero va a hacer el que tome del prompt
	var  numero ;
	var  promedio;
	//limito la cantidad 
	var  interaciones = 5 ;

	while  ( contador < interaciones )
		{
			contador ++ ;
			numero = prompt ( "Ingrese número" ) ;
			numero = parseInt ( numero ) ;
			acumulador = acumulador + numero ;
		}
	promedio = acumulador / contador ;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN