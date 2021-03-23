
var arregloNombres = ["Daniela", "Ana", "Yobany", "Camilo"];

console.log (arregloNombres[2] );
arregloNombres[2] = "Avery";
console.log (arregloNombres[2]);
delete arregloNombres[2];
console.log(arregloNombres );
console.log ("La cantidad de elementos en el arreglo es: " + arregloNombres.length);
arregloNombres.push ("Lina");
console.log(arregloNombres);
arregloNombres.pop();
console.log(arregloNombres);

arregloNombres.splice(0,1, "Lina");
console.log(arregloNombres);

arregloNombres.splice (1,2);
console.log(arregloNombres);

//Ejercicio
//Realizar un programa que lea por teclado 5 notas 
//y muestre el promedio de estas.

const prompt = require('prompt-sync')();
var calificaciones = [];
calificaciones[0] = prompt("Dame la primera calificacion: ");
calificaciones[1] = prompt("Dame la segunda calificacion: ");
calificaciones[2] = prompt("Dame la tercera calificacion: ");
calificaciones[3] = prompt("Dame la cuarta calificacion: ");
calificaciones[4] = prompt("Dame la quinta calificacion: ");

//var resultado = (calificaciones[0] + calificaciones[1] + calificaciones[2] + calificaciones[3] + calificaciones[4]) /5;
var califi1 = calificaciones[0];
var califi2 = calificaciones[1];
var califi3 = calificaciones[2];
var califi4 = calificaciones[3];
var califi5 = calificaciones[4];

var resultado = parseInt (califi1) + parseInt(califi2) + parseInt(califi3) + parseInt(califi4) + parseInt(califi5);

resultado = resultado/= 5;

console.log(resultado);

var concatenaN1 = ["Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adios", "Buenas", "Noches"];
console.log (concatenaN1.concat(concatenaN2));