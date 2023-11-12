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

do {
    fruta = prompt(`${nombre}, Ingresa el nombre de la fruta: `);
    precio = +prompt(" Ingresa el precio: ");
    kilogramos = +prompt("Ingresa la cantidad de kg: ");

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