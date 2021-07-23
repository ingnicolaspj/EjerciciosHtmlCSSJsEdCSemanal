//Generen un arreglo de meses hasta el mes de Julio

// const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

// meses[7] = 'Agosto';
// meses[8] = 'Septiembre';
// meses[9] = 'Octubre';
// meses[10] = 'Noviembre';
// meses[11] = 'Diciembre';

// meses[2] = 'Nuevo Mes';


// console.table(meses);

// Generar dos objetos (producto1 y producto2) con las propiedades de :

    //nombre y precio
    //Arreglo vacio y alamcenar los dos objetos en el arreglo

    //push

const carrito = [];

const producto1 = {
        nombre: 'Mesa plegable',
        precio: 3000,
        disponible:false
}

const producto2 = {
        nombre: 'Laptop',
        precio:8000,
        disponible:true
}

carrito.push(producto2);// Agrega elementos a mi arrglo al final
carrito.push(producto1);


const producto3 = {
        nombre: 'Escritorio',
        precio:10000,
        disponible:false,
        pais: 'Brasil'
}

const producto4 = ['Pantalla plana', 15000, true, 'México'];

carrito.push(producto4);

//Agrega elementos al principio
carrito.unshift(producto3);

console.log(carrito);
console.table(carrito);




