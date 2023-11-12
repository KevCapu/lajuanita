const SI = "si";
const NO = "no";

let nombreProducto;
let precio;
let cantidad;
let total = 0;
let fila;
let continuar;
let ticket = "Nombre     Precio      Cantidad     Subtotal      \n";

nombre = prompt(" Bienvenido al carrito de compras!\n Ingrese su nombre: ");
do {
    nombreProducto = prompt(`Nuevo item\n Ingrese nombre del producto: `);
    precio = +prompt("precio: ");
    cantidad = +prompt("cantidad: ");

    fila = `${nombreProducto}            ${precio}             ${cantidad}             $${cantidad*precio} \n`;
    ticket=  ticket + fila;
    total = total + precio * cantidad

    continuar = prompt("Desea volver a cargar otro item? si/no").toLocaleLowerCase(); 
}while (continuar === SI);

ticket = ticket + `TOTAL: $${total}`;

alert(ticket);
alert(`Gracias por venir ${nombre}!`);


