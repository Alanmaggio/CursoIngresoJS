function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);


// no esta detro del rango
if (!(edad <13 || edad >17 )){
alert("Es adolescente");
}
//    esta adentro del rango?
/*if (edad >= 13 && edad <=17){
    alert("es adolescente");
}

}//FIN DE LA FUNCIÓN