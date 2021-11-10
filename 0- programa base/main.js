function primeraFuncion(){
    let nombre = document.getElementById("cajaTexto").value;
    let apellido = prompt("Introduce tu apellido");

    let mensaje = modificarMensaje(nombre, apellido);
    mostrarMensaje(mensaje);
}

function modificarMensaje(nombre, apellido){
    let mensaje = "Hola "+ nombre +" "+apellido;
    return mensaje;
}

function mostrarMensaje(mensaje){
    document.getElementById("mostrarDatos").textContent = mensaje;
    alert(mensaje);

}