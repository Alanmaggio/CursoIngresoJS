function mostrar() {
    var hora = parseInt(document.getElementById("laHora").value);
    switch (hora) {
        case (hora = "6"):
        case (hora = "7"):
        case (hora = "8"):
        case (hora = "9"):
        case (hora = "10"):
        case (hora = "11"):
            alert("Es de mañana.");
            break;
        case (hora = "12"):
        case (hora = "13"):
        case (hora = "14"):
        case (hora = "15"):
        case (hora = "16"):
        case (hora = "17"):
        case (hora = "18"):
        case (hora = "19"):
            alert("Es de tarde..");
            break;
        case (hora = "20"):
        case (hora = "21"):
            alert("Es de noche.");
            break;
        case (hora = "22"):
        case (hora = "23"):
        case (hora = "24"):
            alert("A dormir!!!");
            break;
} 
}          