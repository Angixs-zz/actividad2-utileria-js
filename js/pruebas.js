function ejecutarPruebasUtileria() {
    console.log("===== PRUEBAS DE utileria.js =====");

    console.log("Correo válido (usuario@gmail.com):", validarCorreo("usuario@gmail.com"));
    console.log("Solo letras válido (Miguel Angel):", soloLetras("Miguel Angel"));
    console.log("Longitud válida (10 dígitos):", validarLongitud("9511234567", 10));
    console.log("Edad calculada (2004-05-10):", calcularEdad("2004-05-10"));
    console.log("Mayor de edad (2004-05-10):", esMayorDeEdad("2004-05-10"));
    console.log("Password válida (Miguel@123):", validarPassword("Miguel@123"));
    console.log("RFC Generado:", generarRFCBasico("Miguel", "Perez", "Garcia", "2004-05-10"));

    console.log("===== FIN DE PRUEBAS =====");
}

// Ejecutar pruebas cuando cargue el archivo
ejecutarPruebasUtileria();
