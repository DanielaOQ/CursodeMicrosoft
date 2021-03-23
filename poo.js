//Programacion Orientada a Objetos 

//Creacion de un objeto
//variable = {nombreCaracteristica: Valor}
var celular = {
    color: "Azul",
    peso: "80 g",
    numCamaras: 4,
    sistema: "Android",
    duracionBateria: 10
}

//console.log(celular);
//Obtener el valor e una caracteristica
//console.log(celular.numCamaras);
//console.log(celular["numCamaras"]);

class galleta{
    constructor(tamaño, forma, sabor) {
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
    }
}
let galletaChocolate = new galleta("5x5 cm", "Cuadrado", "Chocolate" );
var galletaVainilla = new galleta("3 cm", "Circulo" , "Vainilla");

console.log(galletaChocolate);
console.log(galletaVainilla);

console.log(galletaChocolate.sabor);
console.log(galletaVainilla["sabor"]);