/*en lugar de usar el evento onclick en el código html, usamos un addEventListener
directamente en el código javascript. De esta forma queda totalmente separado HTML de javascript
ejemplo con getElementById o con querySelector. Las dos formas son válidas*/
//document.querySelector("#boton").addEventListener('click',function(){
document.getElementById("boton").addEventListener('click',function(){
    let mensaje = document.getElementById("cajaTexto").value;
    mensaje = modificarMensaje(mensaje);
    mostrarMensaje(mensaje);
})


function modificarMensaje(mensaje){
    mensaje = "Hola "+ mensaje;
    return  mensaje;
}

function mostrarMensaje(mensaje){
    document.getElementById("mostrarDatos").innerHTML = mensaje;
}