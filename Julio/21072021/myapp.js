const carrito = [];

const producto = {
    nombre:'Monitor de 20 pulgadas',
    precio:5000
}

const producto2 = {
    nombre:'Silla gamer',
    precio:9000
}

const producto3 = {
    nombre:'Gabinete',
    precio:3000
}

//Agrega elementos al final
carrito.push(producto,producto2);

//Agregar elementos al principio
carrito.unshift(producto3);

//Eliminar el ultimo elemento de mi arreglo
carrito.pop();

//Eliminar del inicio del arreglo
carrito.shift();

// document.write(carrito);

console.table(carrito);