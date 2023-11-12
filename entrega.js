const SI = "si";
const NO = "no";


let fruta;
let precio;
let kilogramos;
let descuento = 100;
let total = 0;
let fila;
let continuar;
let ticket = "Nombre     Precio      Cantidad     Subtotal      \n";

nombre = prompt(" Bienvenido a Fruteria La Juanita!\n Por favor, Ingrese su nombre: ");
while (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("Por favor, ingrese un nombre válido (solo letras).");
    nombre = prompt("Por favor, ingrese su nombre: ");
}

do {
    fruta = prompt(`${nombre}, Ingresa el nombre de la fruta: `);
    while (!/^[a-zA-Z]+$/.test(fruta)) {
        alert("Por favor, ingrese un nombre de fruta válido (solo letras).");
        fruta = prompt(`${nombre}, ingrese el nombre de la fruta: `);
    }
    precio = +prompt(" Ingresa el precio: ");
    while (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un valor numérico mayor a 0 para el precio.");
        precio = parseFloat(prompt("Ingrese el precio: "));
    }
    kilogramos = +prompt("Ingresa la cantidad de kg: ");
    while (isNaN(kilogramos) || kilogramos <= 0) {
        alert("Por favor, ingrese un valor numérico mayor a 0 para la cantidad de kg.");
        kilogramos = parseFloat(prompt("Ingrese la cantidad de kg: "));
    }
    fila = `${fruta}            $${precio}             ${kilogramos}Kg             $${kilogramos*precio} \n`;
    ticket=  ticket + fila 
    total = total + precio * kilogramos - descuento

    continuar = prompt("Desea agrear otra fruta? si/no").toLocaleLowerCase();
    while(continuar !== "no" && continuar !== "si"){
        continuar = prompt (`debe ingresar "no" o "si"`);
    }
}while (continuar === SI);
ticket = ticket + `Descuento: $${descuento}\n`;
ticket = ticket + `TOTAL:    $${total}`;

alert(ticket);
alert(`Gracias por elegirnos ${nombre}!\n Que tengas un buen dia!!`);