//----------------Operadores Aritméticos----------------


//Operador "+"
var operandoN1 = 5000;
var operandoN2 = 15000;
var resultado = operandoN1 + operandoN2;
console.log( resultado );

//Operador "*"
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = 12 * 2;
console.log( resultado2 );

//Operador "/"
var resultado3 = operandoN2 / operandoN1;
console.log("El resultado de tu división es: " + resultado3);
//console.log( resultado3 );

//Operador "++"
resultado3++;
console.log("Incrementando la variable resultado3: " + resultado3 );


//----------------Operadores de asignación----------------
//Operador "="
operandoN1 = operandoN2;
console.log( "El valor del operando1 será: " + operandoN1 );

//Operador "+="
//Forma completa
//operandoN3 = operandoN3 + operandoN4;
//Forma resumida
operandoN3 += operandoN4;
console.log( "Resultado de sumar el operando4 y asignar el resultado al operando3: " + operandoN3 );

//----------------Operadores de comparación----------------
var nComparacion1 = 5;
var nComparacion2 = "5";
var nComparacion3 = 10;

//Operador "==" ---> Si el primer valor es igual al segundo valor, 
//dará como resultado un "true", de lo contrario será "false"
var resultadoComparacion1 = ( nComparacion1 == nComparacion2 );
console.log( "Resultado de la primera comparación: " + resultadoComparacion1 );

//Operador "===" ---> Si el primer valor es igual al segundo valor y son del mismo tipo de dato, 
//dará como resultado un "true", de lo contrario nos será "false"
var resultadoComparacion2 = ( nComparacion1 === nComparacion2 );
console.log( "Resultado de la segunda comparación: " + resultadoComparacion2 );

//Operador ">" ---> Si el primer valor es mayor que el segundo valor, 
//dará como resultado un "true", de lo contrario será "false"
var resultadoComparacion3 = ( nComparacion3 > nComparacion1 );
console.log( "Resultado de la tercera comparación: " + resultadoComparacion3 );


//Operadores Logicos
var op1N1 = 5;
var op1N2 = 20;
var op1N3 = 30;

//Operador && ("AND" o "y")
var resultadoOperadorLY = ( op1N1 < op1N2 ) && ( op1N2 < op1N3 );
console.log( "El resultado del operador Y, es: " + resultadoOperadorLY );

//Operador || ( "OR" o "O")
var resultadoOperadorLO = ( op1N1 < op1N2) || (op1N2 < op1N3);
console.log ( "El resultado del operador O, es:" + resultadoOperadorLO );

//Operador negacion !
var resultadoOperadorLN = !resultadoOperadorLO;
console.log ( "El resultador del operador de Negacion es: " + resultadoOperadorLN );

//Resultado operador && - Y
//true && true --> true 
//false && false --> false
//false && true --> false
//true && false --> false

//Resultado operador || - O
//true || true --> true
//false || false --> false
//false ||true --> true

