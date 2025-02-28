const botonesDiv = document.getElementById("botones")
const resultadoDiv = document.getElementById("resultado")

resultadoDiv.innerHTML = "Mis primero DOM's"

botonesDiv.innerHTML += `
    <button class="btn btn-dark col-3 mt-2 mb-2" onclick="suma()">Suma enteros</button>
    <button class="btn btn-dark col-3 mt-2 mb-2" onclick="division()">Division enteros</button>
    <button class="btn btn-dark col-3 mt-2 mb-2" onclick="letraRepetida()">Repetir letra</button>
`;

// Crear una función llamada "suma", que reciba como parámetros dos números enteros y devuelva como resultado
// otro número entero que sea la suma de ambos.
function suma() {
    let suma = 0;
    const n = 2;
    for (let i = 1; i <= n; i++) {
        const num = parseInt(prompt(`Escribe el número ${i}:`));
        suma += num;
    }
    resultadoDiv.innerHTML = `La suma es: ${suma},`;
}


// Crear una función llamada "division", que reciba como parámetros dos números enteros y devuelva como
// resultado un número real, que sea el resultado de dividir el primer número entre el segundo (con decimales). 
function division() {
    const num1 = parseInt(prompt("Introduce un número"));
    if (num1 > 0) {
        const num2 = parseInt(prompt("Introduce otro número"));
        resultadoDiv.innerHTML = `La división es: ${num1 / num2}`
    }
}


// Crear una función llamada "letraRepetida", que reciba como parámetros una letra y un número, y escriba en
// pantalla esa letra repetida en pantalla varias veces (tantas como indique el número), sin devolver ningún valor. 
function letraRepetida() {
    let letra = prompt("Introduce una letra");
    let veces = parseInt(prompt("Introduce un número"));
    resultadoDiv.InnerHTML = "";
    for (let i = 0; i < veces; i++) {
        resultadoDiv.innerHTML += letra;
    }
    
}


// Crear una función llamada "rotulo", que tome como parámetro una cadena de texto, no devuelva ningún valor,
// y escriba en pantalla ese texto centrado (suponiendo una anchura de pantalla de 80 letras) y en la línea 
// siguiente escriba guiones para que el rótulo parezca subrayado (tantos guiones como letras formen la palabra). 
function rotulo() {
    const texto = prompt("Escribe tu texto"); //const y let se usan para lo mismo
    let guiones = "-";
    let veces = (80 - texto.length)/2; {
        resultadoDiv.innerHTML = guiones.repeat(veces) + texto + guiones.repeat(veces);
    }
            
}


// function rotulo(){
//     let rotulo = 'hola';
//     let ancho = 40;
//     let largo_rotulo = rotulo.length;

//     ifn(){
//     }
//     let mitad = (ancho -largo_rotulo)/2;
//     let caracter ='-';
//     let linea ='';
//     for (let i = 0; i < mitad; i++){
//         linea += caracter;
//     }
//     etiquetaDiv.innerHTML = linea + rotulo + linea + '<hr>';
// }


// Crea dos funciones "solucionRC1" y "solucionRC2" que devuelvan las dos raíces de una ecuación de segundo
// grado. Además, deberás crear una función "existeSolucionRC", que devuelva un 1 si la raíz cuadrada tiene
// solución, o un 0, si no la tiene. 
function solucionRC1 () {
     let ecuacion1 = a;
     let ecuacion2 = b;
     let ecuacion3 = c;
     let operacion1 = sqrt(b2 - 4ac);
     let operacion2 = -b + || -;
     let operacion3 = /2*a
    if ()
    (( -b ± sqrt(b2 - 4ac))/2*a);

    }
    return Math.sqrt(numero1)

// console.log(solucionRC1(numero1))
// function solucionRC2 ();


// function solucionRC1 () {
//     const x = (( -b ± sqrt(b2 - 4ac))/2*a);

//     }
//     return Math.sqrt(numero1)

// console.log(solucionRC1(numero1))
// function solucionRC2 ();


function solucionRC1 () {
     let a = parseInt(prompt("Introduce un número"));
     let b = parseInt(prompt("Introduce otro número"));
     let c = parseInt(prompt("Introduce otro número"));
     let resultado = x;
    
     if ()
    return ((b+math.sqrt(b**2-4*a*c))/2*a);
} resultadoDiv.innerHTML = resultado






function raizcubica(){
    let numero = prompt("Ingresa un número");
    resultadoDiv.innerHTML =`resultado es: ${numero**(1/3)}`
}
