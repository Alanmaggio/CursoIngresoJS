function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
case (mesDelAño = "Abril"):
case (mesDelAño = "Junio"):
case (mesDelAño = "Septiembre"):   
case (mesDelAño = "Noviembre"):
    alert("si tiene 30 días.");
    break;
    case (mesDelAño = "Febrero"):
        alert("si tiene 28 días.");
        break;
        default:
            alert("si tiene 31 días."); 
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN