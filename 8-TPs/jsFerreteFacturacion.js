/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var num1 = parseFloat(document.getElementById("PrecioUno").value);
var num2 = parseFloat(document.getElementById("PrecioDos").value);
var num3 = parseFloat(document.getElementById("PrecioTres").value);
var resultado = (num1 + num2 + num3);
alert("la suma es "+resultado);	
}
function Promedio () 
{var num1 = parseFloat(document.getElementById("PrecioUno").value);
var num2 = parseFloat(document.getElementById("PrecioDos").value);
var num3 = parseFloat(document.getElementById("PrecioTres").value);
var resultado = ((num1 + num2 + num3)/3);
alert ("El promedio es "+resultado);
	
}
function PrecioFinal () 
{var num1 = parseFloat(document.getElementById("PrecioUno").value);
var num2 = parseFloat(document.getElementById("PrecioDos").value);
var num3 = parseFloat(document.getElementById("PrecioTres").value);
var resultado = (num1 + num2 + num3);
var iva = resultado *21/100
var preciofinal = iva + resultado;
alert("El precio final es "+preciofinal);
}