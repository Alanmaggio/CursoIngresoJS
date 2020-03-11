function mostrar() {

    var contNotasM = 0;
    var contNotas = 0;
    var nota;
    var sexo;




    do
    {  (isNaN(nota) || nota == null || nota <=0 || nota >10) 
        nota = parseInt(prompt("Ingrese la nota"));
        alert("Ingrese una nota valida.");
    }
    while (nota >= 1 && nota <=10){ 
        nota = parseInt(prompt("Ingrese la nota"));
        contNotas ++;
}
/*while (sexo == null || sexo != "f" || sexo != "m") {
    alert("Ingrese sexo valido");
}

*/
}
