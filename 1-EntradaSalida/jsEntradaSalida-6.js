/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{//establesco variables(desarmé el problem en partes)
    var numerouno;
    var numerodos;
    var resultado;
    //asigno funcionalidad
    numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno+numerodos;
    //muestro asignacion
    alert("La suma es: "+resultado);
    //tengo 2 numeros, 1 operacion, 1 resultado que mostrar(3 variables 2 asignaciones 1 resultado que mostrar


}

