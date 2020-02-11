function mostrar()
{
//tomo la edad  
var edad;
//asigno:entero tomado del elemnto id y evaluar
edad = parseInt(document.getElementById("edad").value)
// si la edad es menor a 13 y mayor a 17
if(edad <13 || edad >17){
alert("No es adolescente")
}

}//FIN DE LA FUNCIÓN