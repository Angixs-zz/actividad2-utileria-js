let botonValidar = document.getElementById("botonValidar");
let botonCerrarModal = document.getElementById("botonCerrarModal");
let modalEdad = document.getElementById("modalEdad");

botonValidar.addEventListener("click", validarFormulario);
botonCerrarModal.addEventListener("click", cerrarVentanaModal);

function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellidoPaterno = document.getElementById("apellidoPaterno").value.trim();
    let apellidoMaterno = document.getElementById("apellidoMaterno").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;


    if (!soloLetras(nombre)) {
        return;
    }

    if (!soloLetras(apellidoPaterno)) {
        return;
    }

    if (!soloLetras(apellidoMaterno)) {
        return;
    }

    if (!validarCorreo(correo)) {
        return;
    }

    let telValidado = formatearTelefono(telefono);
    if (telValidado.startsWith("Error")) {
        alert(telValidado);
        return;
    }
    // Si pasó la validación, actualizamos el campo con el teléfono bonito
    document.getElementById("telefono").value = telValidado;

    if (!esMayorDeEdad(fechaNacimiento)) {
        return;
    }

    let edad = calcularEdad(fechaNacimiento);

    let rfcGenerado = generarRFCBasico(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
    if (rfcGenerado === false) {
        return;
    }

    document.getElementById("rfc").value = rfcGenerado;

    document.getElementById("mensajeEdad").textContent = "Edad calculada: " + edad + " años.";
    document.getElementById("mensajeMayorEdad").textContent = "El usuario es mayor de edad.";

    mostrarVentanaModal();
}

function mostrarVentanaModal() {
    modalEdad.style.display = "block";
}

function cerrarVentanaModal() {
    modalEdad.style.display = "none";
}