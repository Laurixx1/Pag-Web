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
    const n = parseInt(prompt("Suma:"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += parseFloat(prompt(`Número ${i + 1}:`));
    }
    resultadoDiv.innerHTML = `Suma: ${suma},`;
}


// Crear una función llamada "division", que reciba como parámetros dos números enteros y devuelva como
// resultado un número real, que sea el resultado de dividir el primer número entre el segundo (con decimales). 
function division() {
    const num1 = parseInt(prompt("Introduce un números:"));
    if (num1 > 0) {
        const num2 = parseInt(prompt("Introduce otro número:"));
        resultadoDiv.innerHTML = `division: ${num1 / num2}`
    }
}


// Crear una función llamada "letraRepetida", que reciba como parámetros una letra y un número, y escriba en
// pantalla esa letra repetida en pantalla varias veces (tantas como indique el número), sin devolver ningún valor. 
function letraRepetida() {
    let letra = prompt("Introduce una letra");
    let veces = parseInt(prompt("Introduce un número"));
    resultadoDiv.InnerHTML = "";
    for (let i = 1; i <= veces; i++) {
        resultadoDiv.innerHTML += letra;
    }
    
}
