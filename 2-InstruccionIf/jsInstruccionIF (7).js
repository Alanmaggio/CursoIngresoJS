function mostrar()
{
//tomo la edad  
var edad;
var estadocivil;
edad = parseInt(document.getElementById("edad").value);
estadocivil = document.getElementById("estadoCivil").value;

// si la edad es menor a 18 y estadocivil es distinto a soltero
if (edad <18 && estadocivil != "Soltero"){
    alert("Muy pequeño para No ser soltero");
}
	


}//FIN DE LA FUNCIÓN