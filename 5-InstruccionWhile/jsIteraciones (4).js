function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while (numero >=10)
	{
		alert("tu numero no es correcto");
		numero = prompt("ingrese un número entre 0 y 10.");
	}	
	alert("Tu numero es valido");
}//FIN DE LA FUNCIÓN