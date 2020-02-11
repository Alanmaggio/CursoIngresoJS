function mostrar()
{
//tomo la edad  
var edad;
 edad = parseInt(document.getElementById("edad").value);
if (edad <=17 && edad >= 13){
    alert("es adolescente");
}else if (edad <13){
    alert("es un niño");
}else if (edad >=18){
    alert("Es adulto");
}
}//FIN DE LA FUNCIÓN