function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = parseInt(Math.random()*10)+1;
	if (aleatorio >=9){
		alert("Exelente");
	}
else if (aleatorio <=8 && aleatorio >=4){
	alert("Aprobo");
}	
else alert("Vamos, la proxima se puede");
}//FIN DE LA FUNCIÓN