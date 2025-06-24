console.log("Ok");

// // cambiar nombre de etiqueta
// document.getElementById("labnum1").textContent = "Num1";
// // cambiar color de etiqueta con codigo de color
// document.getElementById("labnum1").style.color = "#21bd0f";

/* Operaciones */
//obtenemos los operandos desde los inputs
let numero1 = parseFloat(document.getElementById("num1").value);//convertimos a decimal el valor obtenido como texto
console.log(numero1); //vemos en consola qué se guardó en la variable

let numero2 = parseFloat(document.getElementById("num2").value);
console.log(numero2);

//colocamos el resultado en el input correspondiente 
document.getElementById("suma").value = numero1 + numero2;
document.getElementById("resta").value = numero1 - numero2;
document.getElementById("multi").value = numero1 * numero2;
document.getElementById("divi").value = numero1 / numero2;

/* validad edad */
let nombre = document.getElementById("nombre").value;
console.log("nombre: " + nombre);

let edad = parseInt(document.getElementById("edad").value);//convertimos a entero el valor obtenido como texto
console.log("edad: " + edad);

//dependiendo de la edad mostramos un mensaje en el contenido del elemento p
if (isNaN(edad)) {
    document.getElementById("mayor_menor").textContent = "Debe ingresar un número";
} else {
    if (edad >= 18) {
        document.getElementById("mayor_menor").textContent = nombre + " tiene " + edad + " años. Es mayor de edad";
    } else {
        document.getElementById("mayor_menor").textContent = nombre + " tiene " + edad + " años. Es menor de edad";
    }    
}