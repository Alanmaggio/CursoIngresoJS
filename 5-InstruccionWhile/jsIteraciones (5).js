function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m") 
{
alert("El sexo no es valido")
sexo = prompt("ingrese f ó m .");
 }

 document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN
// HASTA ESTE LOS HICE YO COMO VENIA EN LA FACU