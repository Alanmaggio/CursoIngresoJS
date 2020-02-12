function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad = parseInt(document.getElementById("edad").value);
estadocivil = document.getElementById("estadoCivil").value;

// si la edad es mayor y estadocivil es igual
if (edad >=18 && estadocivil == "Soltero"){
    alert("es soltero y no menor");
}
	


}//FIN DE LA FUNCIÓN