# Utilería JS - Librería de Validaciones para Formularios

<p align="center">
  <strong>INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO</strong><br>
  <strong>INSTITUTO TECNOLÓGICO DE OAXACA</strong>
</p>

<p align="center">
  <strong>Nombre de la carrera:</strong><br>
  Ingeniería en Sistemas Computacionales
</p>

<p align="center">
  <strong>Nombre de la materia:</strong><br>
  Programación Web
</p>

<p align="center">
  <strong>Unidad:</strong><br>
  Unidad 2
</p>

<p align="center">
  <strong>Título del trabajo:</strong><br>
  Librería JavaScript de Utilería para Validaciones
</p>

<p align="center">
  <strong>Alumno:</strong><br>
  Hernández Pérez Miguel Angel
</p>

<p align="center">
  <strong>Docente:</strong><br>
  Adelina Martínez Nieto
</p>

<p align="center">
  <strong>Grupo:</strong><br>
  B
</p>

<p align="center">
  <strong>Fecha de entrega:</strong><br>
  04 de julio del 2026
</p>

---

## ¿Qué problema resuelve?

Mi libreria `utileria.js` resuelve un problema demasiado comun y muy repetitivo en diferentes formularios
Cuando estamos trabajando con un formulario y tenemos diferentes campos como el nombre, correo, telefono, etc, requerimos validaciones para cada uno, en caso de que nuestros usuarios o clientes ingresen informacion erronea, como escribir numeros en su nombre, dar mal su correo electronico, tener una contraseña muy vulnerable, etc, entonces requerimos validar cada uno de estos campos.

Pero en lugar de estar escribiendo las mismas validaciones una y otra vez, podemos crear una libreria con las funciones de validacion y reutilizarlas en diferentes formularios. Esto nos ayuda como desarrolladores web, porque la misma logica de validar un correo puede ser ocupada para un distintas aplicaciones web, lo que nos ahorra tiempo, esfuerzo y reduce errores en el codigo. Por ello con esta libreria las funciones de validacion se guardan en un solo archivo y las tenemos a la mano para utilizarlas cuando se necesiten

## Instalación

Para poder usar mi libreria en tus proyectos, simplemente debes incluir el archivo `utileria.js` en tu documento HTML usando la etiqueta `<script>`.

Aqui vemos un ejemplo de como esta incluida

```html
<!-- Coloca este script al final del body en tu archivo HTML -->
<script src="js/utileria.js"></script>
```
Es muy importante que la ruta sea la correcta para que pueda funcionar, en este caso esta en la carpeta js y se llama utileria.js

## Uso y Ejemplos

A continuación, se muestran ejemplos de cómo utilizar cada una de las funciones incluidas en la librería.

### 1. `validarCorreo(correo)`
Valida que una cadena de texto tenga el formato correcto de un correo electrónico.

```javascript
let correoUsuario = "juan.perez@email.com";
let esValido = validarCorreo(correoUsuario);

if(esValido) {
    console.log("El correo es válido.");
} else {
    console.log("El correo no es válido.");
}
```

### 2. `soloLetras(texto)`
Valida que el texto ingresado contenga únicamente letras (incluyendo acentos y la letra ñ) y espacios.

```javascript
let nombreUsuario = "José Andrés";
if(soloLetras(nombreUsuario)) {
    console.log("El nombre contiene solo letras.");
}
```

### 3. `validarLongitud(numero, maxLongitud)`
Valida que un número no exceda la longitud máxima especificada y que solo contenga dígitos numéricos.

```javascript
let telefono = "9511234567";
// Valida que el teléfono tenga máximo 10 dígitos y sean solo números
if(validarLongitud(telefono, 10)) {
    console.log("Longitud de teléfono correcta.");
}
```

### 4. `calcularEdad(fechaNacimiento)`
Calcula la edad exacta en años a partir de una fecha de nacimiento (formato YYYY-MM-DD).

```javascript
let fechaNac = "2000-05-15";
let edad = calcularEdad(fechaNac);
console.log("La edad es: " + edad + " años.");
```

### 5. `esMayorDeEdad(fechaNacimiento)`
Determina si una persona es mayor de edad (18 años o más) usando su fecha de nacimiento.

```javascript
let fechaNac = "2005-10-20";
if(esMayorDeEdad(fechaNac)) {
    console.log("Es mayor de edad, puede registrarse.");
} else {
    console.log("Aún es menor de edad.");
}
```

### 6. `validarPassword(password)`
Valida que la contraseña cumpla con los siguientes criterios de seguridad: 
- Mínimo 8 caracteres.
- Al menos una mayúscula.
- Al menos una minúscula.
- Al menos un número.
- Al menos un carácter especial.

```javascript
let pass = "Segura123!";
if(validarPassword(pass)) {
    console.log("La contraseña es segura.");
}
```

### Funciones Adicionales (Propias)

#### 7. `soloNumeros(texto)` *(Función de Apoyo)*
Valida mediante una expresión regular que una cadena de texto contenga exclusivamente dígitos del 0 al 9. Se diseñó para ser reutilizada por otras funciones.

```javascript
if(soloNumeros("12345")) {
    console.log("El texto solo contiene números.");
}
```

#### 8. `formatearTelefono(telefono)`
Toma un número de teléfono escrito de corrido y le aplica un formato visual estándar `(XXX) XXX-XXXX`. Esto ayuda para que se puedan leer mejor los datos de un contacto, dando una mejor estandarizacion y evita que los numeros telefonicos se muestren feos y desordenados. Asi tambien se apoya de la función `soloNumeros` para validar.

```javascript
let telefonoUsuario = "9511234567";
let telFormateado = formatearTelefono(telefonoUsuario);
console.log(telFormateado); // Obtenemos (951) 123-4567
```

#### 8. `generarRFCBasico(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento)`
Genera la primera parte del RFC de una persona a partir de su nombre completo y fecha de nacimiento.

```javascript
let rfc = generarRFCBasico("Miguel Angel", "Hernandez", "Perez", "2005-04-12");
if(rfc) {
    console.log("El RFC básico generado es: " + rfc);
}
```

## Capturas de Pantalla

*(Nota para el alumno: Agrega aquí las capturas de pantalla de la consola mostrando los resultados de las funciones, o de las alertas en el navegador)*

*Ejemplo de cómo insertar una imagen:*
`![Ejemplo de Consola](img/captura1.png)`

## Video Demostrativo

En el siguiente video se explica el problema que resuelve la librería, se muestra cómo utilizarla y su funcionamiento en vivo a modo de un demo promocional.

*(Nota para el alumno: Reemplaza el siguiente enlace con el enlace real a tu video en YouTube, Google Drive u otra plataforma)*

[**Ver Video Promocional (Click Aquí)**](https://enlace-a-tu-video.com)

## Enlace a GitHub Pages

Puedes probar los formularios funcionando en vivo con las validaciones de esta librería en el siguiente enlace:

*(Nota para el alumno: Reemplaza el siguiente enlace con tu enlace real de GitHub Pages)*

[**Ver Repositorio - GitHub Pages**](https://github.com/Angixs-zz/actividad2-utileria-js)
[**Ver Pagina en Vivo - GitHub Pages**](https://angixs-zz.github.io/actividad2-utileria-js/index.html)
