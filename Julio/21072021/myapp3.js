//Funciones

// function sumar(){
    
//     const numero1 = parseInt(prompt('Dame el primer numero a sumar'));
//     const numero2 = parseInt(prompt('Dame el segundo numero a sumar'));

//     let resultado = numero1 + numero2;

//     document.write(`La suma de ${numero1} + ${numero2} es igual a  ${resultado}`);

// }

// const restar = function(){
//     document.write(80 - 20);
// }

//Arrow function (Funcion flecha)

const divide = (a,b)=>{

    if( b == 0){
        document.write('No se puede dividir entre 0')
    }else{
        document.write(a / b +'<br>');
    }

}

    

divide(2,3);
divide(10,2);
divide(10,2);
divide(10,0);
divide(52,7);

// restar();
// sumar();





