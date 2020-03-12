function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
//evaluo los casos
switch (mesDelAño)
{
case (mesDelAño = "Enero"):;
    case (mesDelAño = "Febrero"):
    case (mesDelAño = "Marzo"):
    case (mesDelAño = "Abril"):
    case (mesDelAño = "Mayo"):
    alert("Falta para el invierno.");
    break;
    case (mesDelAño = "Junio"):
    case (mesDelAño = "Julio"):
    case (mesDelAño = "Agosto"):
    alert("Abrigate que hace frio.");
    break;
    case (mesDelAño = "Septiembre"):
    case (mesDelAño = "Octubre"):;
    case (mesDelAño = "Noviembre"):
    case (mesDelAño = "Diciembre"):
    alert("Ya pasamos el frio, ahora calor!!!..");
    break;
}
}//FIN DE LA FUNCIÓN