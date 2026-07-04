let botonLogin = document.getElementById("botonLogin");
let botonCerrarModal = document.getElementById("botonCerrarModal");
let modalLogin = document.getElementById("modalLogin");

botonLogin.addEventListener("click", validarLogin);
botonCerrarModal.addEventListener("click", cerrarVentanaModal);

function validarLogin() {
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!validarCorreo(correo)) {
        return;
    }

    if (!validarPassword(password)) {
        return;
    }

    document.getElementById("mensajeLogin").textContent = "El correo y la contraseña cumplen con las validaciones.";

    mostrarVentanaModal();
}

function mostrarVentanaModal() {
    modalLogin.style.display = "block";
}

function cerrarVentanaModal() {
    modalLogin.style.display = "none";
}