// ctrl + }: sirve para volver todos los códigos en comentarios


// Comentario( // ), Variables: let, var
let nombre = "Eder Lara T";
let Nombre = 'Roger, ';
let nomBre = `Julieth`;
// Cómo debemos escribir variables:
// Forma pascal Case: Nombre
// Forma camell Case: nombreCompleto, nombre
// Forma snake Case : nombre_completo

// Forma de escribir:
// Variables = snake_case
// Funciones = cammelCase
// Clases = PascalCase

// Constantes:
const DATABASE = 'MySQL';

//console.log(nombre, Nombre, nomBre, DATABASE);

// Tipos de Datos:
// Tipos de datos primitivos (números, cadenas, booleanos, null, undefined)

let numero = 123
let enteros = 123         // int = 32,63 y piquito
let flotantes = 234.23    // float = 
let texto = `Esto es un texto @!"#$$%&//(976487.23123"`
let booleano = true || false
let dato_null = null;
let dato_indefinido;

dato_indefinido = `Hola Porque estas sola, sola te veo pasar...`
console.log(enteros, flotantes, texto, dato_indefinido )
dato_indefinido = 123.32

console.log(enteros, flotantes, texto, dato_indefinido )

// Operadores:
// Operadores aritméticos (+, -, *, /, **, //, %)


// Operadores de comparación (==, ===, !=, !==, >, <, >=, <=)
let pela;
let oficio = "Barrer"
let hijo = "Juan"

// Operación: pela = resultado
resultado =  true
if (resultado){
    console.log(hijo + "se puso" + oficio);
}else{console.log(hijo + "se gano la pela")}


//Condición para sumar
let numero_1 = 15
let numero_2 = 84

if (numero_1 >= numero_2){
  console.log(numero_1 + "es mayor que" + numero_2);
  console.log(numero_1 + numero_2)
}
else{
  console.log(numero_2 + "es mayor que" + numero_1);
  console.log(numero_2 - numero_1)
  if (numero_2 % numero_1 != 0){
    console.log("No existe un número que multiplicado por"+numero_1+"Me de exactamente"+numero_2)
  }
}

// switch (condicion){
 // case condicion:
 // break;
 // default:
//}


switch (numero_1){
  case 30:
    console.log(numero_1 + "es par")
    break;
  case 31:
    console.log("mensaje de" + numero_1);
    break;
  default:
    console.log(numero_1 + "no es el número que esperabamos");
    break;
}



if (numero_2 % 2 != 0){
  console.log(numero_2 + "es par")
} else if (numero_2 / 7 === 12){
  console.log(numero_2 + "es divisible por 7")
}



// Estructuras de repetición: map, for, while, do while
// i: iterador
 for (let i=0; i < numero_1; i++){
  console.log(i);
}

let bandera = 0;
while (bandera <= numero_1){
  console.log(bandera);
  bandera = bandera+1;
}

let j = 0
do {
  console.log(j);
  j = j + 1;
} while (j <= numero_1)




//////////////////////////////////////////////////////////////////////////////////////////////////////////


let sumando = 1
let otro_sumando = 6
let suma = sumando + otro_sumando;
console.log(suma);
let variable_texto = 'hola' + 'Por qué estás sola?' 
console.log(variable_texto)


////////////////////////////////////////////////////////////////////////////////////


/////////       EJERCICIOS       /////////////////////////
// Ejercicio #1
let numero = 20

if (numero % 1 == 0){
  console.log("es par")
}
else {
  console.log("es impar")
}

// Ejercicio #3
let numero1 = 2

if (numero1 >= 0){
  let numero2 = 4;
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;
  let producto = numero1 * numero2;
  console.log(suma, resta, producto);
}

// Ejercicio #5 
let numero2 = 21
let numero3 = 33
let numero4 = 1

if (numero2 >= numero3 && numero2 >= numero4){
  console.log("Mayor")
} else if (numero3 >= numero2 && numero3 >= numero4){
  console.log ("Mayor")
} else if (numero4 >= numero2 && numero4 >= numero3){
    console.log("Mayor")
  }

// Ejercicio #7
let temperatura = 25

if (temperatura < 0){
  console.log("estado sólido")
} else if (temperatura < 100){
  console.log("estado líquido")
} else if (temperatura > 100){
  console.log("estado gaseoso")
}

// Ejercicio #11
let monday = "m"
let tuesday = "t"
let wednesday = "w"
let thursday = "h"
let friday = "f"

switch ("m"){
  case "m":
    console.log("monday")
    break;
  case "t":
    console.log("tuesday")
    break;
  case "w":
    console.log("wednesday")
    break;
  case "h":
    console.log("thursday")
    break;
  case "f":
    console.log("friday")
    break;
}


// Ejercicio #12 Solicitar al usuario una fecha (dd:mm:aaaa) y comprobar si es correcta. Para que una fecha sea correcta es
//necesario:
// • El año debe ser mayor que cero.
// • El mes debe estar entre 1 y 12.
// • Dependiendo del mes que sea, el día debe estar dentro de los límites válidos. Los meses que tienen 31 días
// son 1, 3, 5, 7, 8, 10 y 12. Los meses de 30 días son 4, 6, 9 y 11. El mes de 28 días es 2, excepto en un año
// bisiesto que es 29 días. 
Mirar ejercicio

let dd = 10
let mm = 12
let aaaa = 2001

if (dd <= 31 && mm == 1,3,5,7,8,10,12 && aaaa >0<= 9999){
 console.log(dd,mm,aaaa)
  } if (dd => 28 && mm != 2 && aaaa != 9999){
    console.log ("Error")
  } if (dd => 30 && mm == 4,6,9,11 && aaaa >0<= 9999){
 console.log(dd,mm,aaaa)
}


// Ejercicio #13 Escribir un programa que permita determinar la cantidad total a pagar por una llamada telefónica de N minutos (introducido por el usuario), teniendo en cuenta lo siguiente: • Las llamadas de 5 minutos o menos tienen un coste de 10 BsF. • Cada minuto adicional a partir de los 5 primeros cuesta 2 BsF
let N = 6

switch (N){
  case 1,2,3,4,5:
    console.log("10BsF")
    break;
  case 6>10:
    console.log("10BsF")
}


// Hacer el número 23 al final








