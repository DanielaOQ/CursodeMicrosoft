//Metodo sort - sirve para ordenar 
var frutasN1 = ["Mandarina", "Pera", "Manzana", "Durazno"];
var frutasN2 = ["Mandarina", "Pera", "Cereza", "Durazno"];
var arregloNumeros = [5000, 10, 200, 1000, 400];
frutasN1.sort ();
console.log (frutasN1);
frutasN2.sort ();
console.log (frutasN2);
//arregloNumeros.sort();
console.log(arregloNumeros);

//Ciclos - for
console.log("Hola - forma manual"); 
console.log("Hola - forma manual");
console.log("Hola - forma manual");
for(var i = 10; i >= 2; i--){
    console.log("Hola - forma automatica" + " i: " + i);
}
//Ayuda: ctrl + c

//[5000, 10, 200, 1000, 400] - original
//[10, 1000, 200, 400, 5000] - ordenada
//console.log(arregloNumeros [4]);
for(var j = 0; j < arregloNumeros.length; j++) {
    console.log("El valor del arreglo en la posicion: " + j + " es:" + arregloNumeros[j]);
}


