/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var F = parseFloat(document.getElementById("Temperatura").value);
var operacion = ((F - 32) / 1/8);
alert(F+" Fahrenheit son "+operacion+" centigrados");	
}

function CentigradosFahrenheit () 
{
var C = parseFloat(document.getElementById("Temperatura").value);
var operacion = ((C * 1/8) + 32);
alert(C+" centigrado son "+operacion+" Fahrenheit");
	
}
