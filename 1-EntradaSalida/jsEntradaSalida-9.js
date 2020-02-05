/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{//establesco variables
    var sueldo;
    var aumento;
    var sueldoaumentado;
//capturo lo que esta adentro de la casilla sueldo(asignacion)    
sueldo = parseInt(document.getElementById("sueldo").value);
//operacion de porcentaje
aumento = (sueldo *10)/100;
//hago la operacion final
sueldoaumentado = aumento + sueldo;
// capturo la casilla para mostrar la asignacion de la variable
document.getElementById("resultado").value = sueldoaumentado;	
}
