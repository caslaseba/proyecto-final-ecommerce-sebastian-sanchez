console.log("Hola mundo")

let edad = parseInt(prompt("Ingrese edad: "));
console.log(edad)


if (!isNaN(edad)) {
    if (edad >= 18) {
    console.log("Sos mayor de edad");
    } else {
    console.log("Sos menor de edad")
    }
} else {
    console.log("Ingresaste un dato erroneo")
}
