/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var importe;
    var descuento;
    var sueldodescuento;
importe = parseInt(document.getElementById("importe").value);
descuento = (importe *25)/100;
sueldodescuento = importe - descuento;
document.getElementById("resultado").value = sueldodescuento;	
}
