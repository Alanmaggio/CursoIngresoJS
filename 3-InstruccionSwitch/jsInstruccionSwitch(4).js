function mostrar() {

    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;


    switch (mesDelAño) {
        case (mesDelAño = "Abril"):
        case (mesDelAño = "Junio"):
        case (mesDelAño = "Septiembre"):
        case (mesDelAño = "Noviembre"):
            alert("Tiene 30 días.");
            break;
        case (mesDelAño = "Febrero"):
            alert("Tiene 28 días.");
            break;
        default:
            alert("Tiene 31 días.");
    }
}//FIN DE LA FUNCIÓN