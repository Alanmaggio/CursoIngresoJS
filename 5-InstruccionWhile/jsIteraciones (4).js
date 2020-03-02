function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while (numero >=10 || numero <0)
	{
		alert("tu numero no es valido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}	
	alert("Tu numero es valido");
}//FIN DE LA FUNCIÓN