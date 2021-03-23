//Ejercicio de repaso Semana1
//Para calcular el promedio de practicas de un curso
//se tomara la calificacion de las 4 practicas que se
//hicieron, de estas 4 se va a eliminar la practica con
//menos calificacion y se obtendra el promedio de las 3
//practicas restantes

const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
var caliMenor = practicaN1;
var resultado = 0;

if (practicaN2 < caliMenor) {
    caliMenor = practicaN2;
}
else if ( practicaN3 < caliMenor) {
    caliMenor = practicaN3;
}
else if (practicaN4 < caliMenor){
    caliMenor = practicaN4;
}

resultado = (practicaN1 + practicaN2 + practicaN3 + practicaN4 - caliMenor) / 3
console.log (resultado);
