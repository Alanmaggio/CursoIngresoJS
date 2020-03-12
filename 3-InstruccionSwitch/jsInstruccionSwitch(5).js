function mostrar() {

        // tomo la hora
        var laHora = parseInt(document.getElementById('hora').value);
        //evaluo casos
        switch (laHora) {
                case (laHora = 7):
                case (laHora = 8):
                case (laHora = 9):
                case (laHora = 10):
                case (laHora = 11):
                        alert("Es de mañana.");
                        break;
        }
}//FIN DE LA FUNCIÓN