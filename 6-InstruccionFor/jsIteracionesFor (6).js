function mostrar()
{
    var impares=0;
    var pares=0;
    var ingreso = parseInt(prompt("Ingrese un número"));

    // Para orden descendente: 
    for(var i= ingreso; i>0; i--){
    //Para orden ascendente:
    //for (var i = 1; ingreso+1>i; i++) {
        
        while (isNaN(ingreso)) {
            ingreso = parseInt(prompt("Reingrese un número"));
        }
        
        if (i%2==0) {
            console.log(i);
            pares++;
        }
     }
     alert("Cantidad de números pares: "+pares);  

        
}//FIN DE LA FUNCIÓN