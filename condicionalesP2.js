//Ejemplp
//Dado un numero, separarlo en centenas, decenas y unidades,
//Intrecambiar la posicion entre las centenas y las unidades
//e imprimir el numero final

var numeroCompleto = 738;
if ( numeroCompleto <= 999 && numeroCompleto > 99 ) {
     var centenas = parseInt (numeroCompleto / 100);
     //centenas = parseInt )(738 / 100);
     //console.log ( centenas);
     var decenas = parseInt (numeroCompleto % 100 / 10);
     //decenas = parseInt (38 / 10);
     //console.log ( decenas );
     var unidades = (numeroCompleto % 100) - (decenas*10);
     //unidades = parseInt (38 - 20)
     //console.log (unidades);
     //console.log ("El valor final es: " + unidades + decenas + centenas);

    } 
else {
    console.log ("Ingresa un numero de 3 cifras");
}

//Entero
//Numeros enteros son los que no tienen decimales


//var resto = 120;
//resultado = 210 % 20;
//console.log (resultado);

//condicional Switch

var conSwitch = "Daniela";
var edad = "18";
switch (conSwitch) {
    case 2:
        console.log ("El valor ingresado es: 2");
        break;
    case 6: 
        console.log("El valor ingresado es: 6");
        break;
    case "Daniela":
         console.log ("Hola Daniela");
         if (edad == 18){
             console.log ("Felicidades eres mayor de edad");
         }
         break;
    default:
        console.log("El valor ingresado es distinto");
        break;
}
