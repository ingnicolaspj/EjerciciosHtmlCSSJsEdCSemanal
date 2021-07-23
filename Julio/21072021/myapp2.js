const producto = {
    nombre:'Monitor de 20 pulgadas',
    precio:5000,
    pais: 'China'
}

// const nombre = producto.nombre;

// console.log(nombre);

//Destructiring Objetos

// const { nombre } = producto;
// console.log(nombre);

//Destructuring con arreglos

const numeros = [10,20,30,40,50,'Hola mundo',true,null];

const [ primero,...resto ] = numeros;

document.write(primero+ ' ');
document.write(resto);


