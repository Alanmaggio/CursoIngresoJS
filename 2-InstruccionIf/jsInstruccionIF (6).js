function mostrar()
{
//tomo la edad y asigno valor 
var edad;
 edad = parseInt(document.getElementById("edad").value);

// si edad es menor igual 18
 if (edad >=18){
    alert("Es mayor de edad");
 }
 //entonces si edad menor igual y edad mayor igual 13
 else if (edad <=17 && edad >= 13){
    alert("es adolescente");
 }
// entoces por logica lo que es    
else{
    alert("es un menor de edad");
 }

}//FIN DE LA FUNCIÓN