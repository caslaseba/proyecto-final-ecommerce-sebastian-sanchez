console.log("Ok");

/** validar 2 condiciones */
let edad2 = parseInt(document.getElementById("edad2").value);
console.log("edad2: " + edad2);
console.log("es de tipo: " + typeof(edad2));

let esVip = document.getElementById("esVip").checked;
console.log("esVip: " + esVip);
console.log("es de tipo: " + typeof(esVip));

if (isNaN(edad2)) {
    document.getElementById("mayor_menor").textContent = "Debe ingresar un número";
} else {
    if (edad2 >=18 && esVip == true) {
        console.log(edad2 >= 18 && esVip == true); //para ver en consola qué resultado da esa expresión
        document.getElementById("acceso").style.color = "green";
        document.getElementById("acceso").textContent = "ADELANTE!";
    } else {
        console.log(edad2 >= 18 && esVip == true); //para ver en consola qué resultado da esa expresión
        document.getElementById("acceso").style.color = "red"
        document.getElementById("acceso").textContent = "NO PUEDE PASAR"
    }
}

/* trabajar con una lista */
//creamos una variable que guarda una lista de elementos
//cada elemento de la lista es 
let productos = [
    {
        nombre: "Laptop A", 
        descripcion: "asñdlkfas ñasdfjñsd ",
        precio: 5000,
        descuento: true
    },
    {nombre: "Celular A", descuento: false},
    {nombre: "Tablet A", descuento: true},
    {nombre: "Laptop B", descuento: true},
    {nombre: "Celular B", descuento: false},
    {nombre: "Tablet B", descuento: true},
    {nombre: "Laptop C", descuento: false},
    {nombre: "Celular C", descuento: true},
    {nombre: "Tablet C", descuento: false},
];

//practicamos en la consola
//para acceder a los productos de la lista usamos la siguiente forma
console.log("Producto 1 - nombre: " + productos[0]["nombre"] + " - descuento: " + productos[0]["descuento"]);
console.log("Producto 2 - nombre: " + productos[1]["nombre"] + " - descuento: " + productos[1]["descuento"]);
console.log("Producto 3 - nombre: " + productos[2]["nombre"] + " - descuento: " + productos[2]["descuento"]);
//... y así sucesivamente

//lo mismo pero con estructura de repetición
console.log("Usando for")
for (let contador = 0; contador < productos.length; contador++) {
    console.log("Producto" + (contador + 1) + " - nombre: " + productos[contador]["nombre"] + " - descuento: " + productos[contador]["descuento"]);
}

//en la página
//todos los productos
let todosLosProductos = document.getElementById("todosLosProductos");
for (let contador = 0; contador < productos.length; contador++) {
    todosLosProductos.innerHTML = todosLosProductos.innerHTML + "Producto" + (contador + 1) + " - nombre: " + productos[contador]["nombre"] + " - descuento: " + productos[contador]["descuento"] + "<br>";
}

//productos con descuento
let conDescuento = document.getElementById("conDescuento");
for (let contador = 0; contador < productos.length; contador++) {
    if (productos[contador]["descuento"] === true) {
        conDescuento.innerHTML = conDescuento.innerHTML + "Producto" + (contador + 1) + " - nombre: " + productos[contador]["nombre"] + " - descuento: " + productos[contador]["descuento"] + "<br>";
    }
}

//productos sin descuento
let sinDescuento = document.getElementById("sinDescuento");
for (let contador = 0; contador < productos.length; contador++) {
    if (productos[contador]["descuento"] === false) {
        sinDescuento.innerHTML = sinDescuento.innerHTML + "Producto" + (contador + 1) + " - nombre: " + productos[contador]["nombre"] + " - descuento: " + productos[contador]["descuento"] + "<br>";
    }
}