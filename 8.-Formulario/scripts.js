//Seleccionamos los elementos del formulario
var tel = document.forms['vform']['tel'];


//Seleccionamos el id del div donde mostramos el error
var tel_error = document.getElementById('tel_error');


// Configuramos el Event Listeners
tel.addEventListener('change', telVerify);


//Función de validación del submit
function Validate() {
  let isCorrect = true;
  /*valida que teléfono pueda tener el prefijo +0034 de España seguido de 6 o 7 o 9
    y que después de empezar por 6, 7, 8 o 9 tiene que tener 8 cifras más*/
  let telefono = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
  if (!(telefono.test(tel.value))) {
    tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Télefono is required";
    isCorrect = false;
  }
  return isCorrect;
}

//event handler functions
function telVerify() {
  let telefono = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
  if (!(telefono.test(tel.value))) {
    document.getElementById('tel_div').style.color = "#ad2300";
  }else{
  	tel.style.border = "1px solid #5e6e66";
  	document.getElementById('tel_div').style.color = "#0ec771";
  	tel_error.innerHTML = "";
  }
}
