var form = document.querySelector("#form"); // selecciona el primero que cumple con el selector
form.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    //Validacion de la caja de texto
    var valido = true;
    var letra = /^[a-z ,.'-]+$/i;
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtCorreo = document.getElementById("correo");
    var txtTelefono = document.getElementById("telefono");
    var txtUsuario = document.getElementById("n_usuario");
    var txtContraseña = document.getElementById("contraseña");
    var numeroreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var telefonoreg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    limpiarMensajes();

    //Validacion para nombres
    if (txtNombres.value === '') {
        valido = false;
        mensaje("El campo de nombre es requerido",txtNombres);
    } else if (txtNombres.value.length > 20) {
        valido = false;
        mensaje("Ingrese un máximo de 20 caracteres para el campo de nombre",txtNombres);
    } else if (!letra.test(txtNombres.value)) { 
        valido = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    }
    //Validacion para apellidos 
    if (txtApellidos.value === '') {
        valido = false;
        mensaje("El campo de usuario es requerido",txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        valido = false;
        mensaje("Ingrese un máximo de 20 caracteres para el campo de usuario",txtUsuario);
    } else if (!letra.test(txtApellidos.value)) { 
        valido = false;
        mensaje("Nombre solo debe contener letras", txtApellidos);
    }
    //validacion para el correo
    if (txtCorreo.value === "") {
            valido = false;
            mensaje("Email es requerido", txtCorreo);
        } else if (!correo.test(txtCorreo.value)) {
            valido = false;
            mensaje("Email no es correcto", txtCorreo);
        }
    //validacion telefono
    if (txtTelefono.value === "") {
        valido = false;
            mensaje("Telefono es requerido", txtTelefono);
        } else if (!telefonoreg.test(txtTelefono.value)) {
            valido = false;
            mensaje("Telefono debe ser de 10 digitos", txtTelefono);
        }

        //Validacion para los nombres de usuario
    if (txtUsuario.value === '') {
        valido = false;
        mensaje("El campo de usuario es requerido",txtUsuario);
    } else if (txtUsuario.value.length > 20) {
        valido = false;
        mensaje("Ingrese un máximo de 20 caracteres para el campo de usuario",txtUsuario);
    } else if (!letra.test(txtUsuario.value)) { 
        valido = false;
        mensaje("Nombre solo debe contener letras", txtUsuario);
    }
    //Validacion Contraseña
    if (txtContraseña.value === '') {
        valido = false;
        mensaje("El campo de contraseña es requerido",txtContraseña);
    } else if (txtContraseña.value.length < 8 || txtContraseña.value.length > 20) {
        valido = false;
        mensaje("La contraseña debe tener entre 8 y 20 caracteres",txtContraseña);
    }
    if (valido) {
        window.location.href = "Login_Formulario.html";
    }
  }
  function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
  }
  function limpiarMensajes() {
      var mensajes = document.querySelectorAll(".mensajeError");
      for (let i = 0; i < mensajes.length; i++) {
          mensajes[i].remove();// remueve o elimina un elemento de mi doc html
      }
    }