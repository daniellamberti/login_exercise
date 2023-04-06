let pasww = "asdf";
i = 1;

while (i <= 3) {
    let contra = (prompt(alert("Ingrese su contraseña")));


    if(contra != pasww) {
        alert("Intento número " + i + " de LOGIN");
        i++

    }
    else {
        alert("Su contraseña es correcta, ha ingresado a su LOGIN");
        cont = si;
        break;
    }
}
    alert("Ha utilizado sus 3 intentos de LOGIN");