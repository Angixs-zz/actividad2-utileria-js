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
    let codigoPostal = document.getElementById("codigoPostal").value.trim();

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

    if (!validarLongitud(telefono, 10)) {
        return;
    }

    if (!esMayorDeEdad(fechaNacimiento)) {
        return;
    }

    if (!validarCodigoPostal(codigoPostal)) {
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