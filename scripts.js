let num1 = parseFloat(prompt("Ingrese 1er número: "));

console.log(num1)
if (!isNaN(num1)) {
    console.log("1er número correcto");
} else {
    console.log("No ingreso un número correcto");
    }

let num2 = parseFloat(prompt("Ingrese 2do número: "));
console.log(num2);
if (!isNaN(num2)) {
    console.log("2do número correctos");
}   else {
    console.log("No ingreso un número correcto");
    }

console.log("Que desea hacer con estos números?: ");
console.log("sumar? (s): ");
console.log("restar? (r): ");
console.log("multiplicar? (m): ");
console.log("dividir? (d): ");

let operacion = prompt("Ingrese la opción: ");

switch (operacion) {
    case "s":
        console.log("Resultado de la suma:", num1 + num2);
        break;
    case "r":
        console.log("Resultado de la resta:", num1 - num2);
        break;
    case "m":
        console.log("Resultado de la multiplicación:", num1 * num2);
        break;
    case "d":
        if (num2 !== 0) {
            console.log("Resultado de la división:", num1 / num2);
        } else {
            console.log("No se puede dividir por cero");
        }
        break;
    default:
        console.log("Opción no válida");
}

/*Validación de edad*/

let edad = parseInt(prompt("Qué edad tiene?: "));

if (!isNaN(edad)) {
    if (edad >= 18 && edad <= 110) {
        console.log("Pasá, sos mayor de edad")
    } else if (edad >12 && edad < 18) {
        console.log("Sos menor de edad, no podés pasar!")
    } else if (edad >0 && edad <=12) {
        console.log("Sos un niño")
    } else {
        console.log("Tu edad no es válida!")
    }
} else {
    console.log("Tu edad no es válida!")
}

