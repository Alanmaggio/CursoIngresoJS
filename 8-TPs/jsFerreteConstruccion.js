/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo = parseFloat(document.getElementById("Largo").value);
var ancho = parseFloat(document.getElementById("Ancho").value);
var operacion = ((largo + ancho)*3);
alert("La cantidad es "+operacion);

}
function Circulo () 
{var radio = parseFloat(document.getElementById("Radio").value);
var operacion = (radio * 3);
alert("La cantidad es "+operacion);	
}
function Materiales () 
{var largo = parseFloat(document.getElementById("Largo").value);
var ancho = parseFloat(document.getElementById("Ancho").value);
var area = largo * ancho;
var cemento = area*2;
var cal = area*3;
alert(" Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal")



	
}