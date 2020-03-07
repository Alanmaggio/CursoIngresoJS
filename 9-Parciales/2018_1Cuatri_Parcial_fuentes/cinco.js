function mostrar() {
    var planetas = prompt("Ingrese un planeta");
    switch (planetas) {
        case (planetas = "Tierra"):
            alert("Aquí vivimos!!");
            break;
        case (planetas = "Mercurio"):
        case (planetas = "Venus"):
            alert("Hace mucho calor!!");
            break;
        case (planetas = "Marte"):
        case (planetas = "jupiter"):
            alert("Hace calor");
            break;
        case (planetas = "Saturno"):
        case (planetas = "Urano"):
            alert("Hace frio");
        case (planetas = "Neptuno"):
            alert("Hace mucho frio!!!");
            break;
    }

}
