// app.js

let listaGenerica; // Declare listaGenerica without initialization


// Crear una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Ruby', 'Java', 'GoLang', 'Swift', 'Rust'];


// Agregar a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar lenguajes
function mostrarLenguajes() {
    const output = document.getElementById('lenguajesOutput');
    output.innerHTML = lenguagesDeProgramacion.join(', ');
}

function calcularMediana(listaNumeros) {
    listaNumeros.sort((a, b) => a - b);
    const mitad = Math.floor(listaNumeros.length / 2);
    if (listaNumeros.length % 2 === 0) {
        return (listaNumeros[mitad - 1] + listaNumeros[mitad]) / 2;
    } else {
        return listaNumeros[mitad];
    }
}

// Función para calcular la moda
function calcularModa(listaNumeros) {
    const frecuencia = {};
    listaNumeros.forEach(num => {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
    });
    const maxFrecuencia = Math.max(...Object.values(frecuencia));
    return Object.keys(frecuencia).filter(num => frecuencia[num] === maxFrecuencia);
}

// Función para calcular la desviación estándar
function calcularDesviacion(listaNumeros) {
    const promedio = calcularPromedio(listaNumeros);
    const sumaCuadrados = listaNumeros.reduce((acc, num) => acc + Math.pow(num - promedio, 2), 0);
    return Math.sqrt(sumaCuadrados / listaNumeros.length);
}

// Función para calcular el factorial
function calcularFactorial(num) {
    if (num < 0) return undefined; // Factorial no definido para números negativos
    return num === 0 ? 1 : num * calcularFactorial(num - 1);
}

// Event listeners para los nuevos botones
document.getElementById('calcularMedianaBtn').addEventListener('click', () => {
    const input = document.getElementById('numerosInput').value.split(',').map(Number);
    const mediana = calcularMediana(input);
    document.getElementById('numerosOutput').innerHTML = `Mediana: ${mediana}`;
});

document.getElementById('calcularModaBtn').addEventListener('click', () => {
    const input = document.getElementById('numerosInput').value.split(',').map(Number);
    const moda = calcularModa(input);
    document.getElementById('numerosOutput').innerHTML = `Moda: ${moda.join(', ')}`;
});

document.getElementById('calcularDesviacionBtn').addEventListener('click', () => {
    const input = document.getElementById('numerosInput').value.split(',').map(Number);
    const desviacion = calcularDesviacion(input);
    document.getElementById('numerosOutput').innerHTML = `Desviación: ${desviacion}`;
});

document.getElementById('calcularFactorialBtn').addEventListener('click', () => {
    const input = parseInt(document.getElementById('numerosInput').value);
    const factorial = calcularFactorial(input);
    document.getElementById('numerosOutput').innerHTML = `Factorial: ${factorial}`;
});

function mostrarLenguajesInverso() {
    const output = document.getElementById('lenguajesOutput');
    output.innerHTML = lenguagesDeProgramacion.slice().reverse().join(', ');
}

// Función para calcular el promedio
function calcularPromedio(listaNumeros) {
    const suma = listaNumeros.reduce((acc, num) => acc + num, 0);
    return suma / listaNumeros.length;
}

// Función para mostrar el número más grande y el más pequeño
function mostrarMinMax(listaNumeros) {
    const maximo = Math.max(...listaNumeros);
    const minimo = Math.min(...listaNumeros);
    return `Máximo: ${maximo}, Mínimo: ${minimo}`;
}

// Función para sumar elementos
function sumarElementos(listaNumeros) {
    return listaNumeros.reduce((acc, num) => acc + num, 0);
}

// Función para cuadrar números
function cuadrarNumeros(listaNumeros) {
    return listaNumeros.map(num => num * num);
}

document.addEventListener('DOMContentLoaded', () => {


    document.getElementById('mostrarLenguajesBtn').addEventListener('click', mostrarLenguajes);
    document.getElementById('mostrarLenguajesInversoBtn').addEventListener('click', mostrarLenguajesInverso);
    document.getElementById('calcularPromedioBtn').addEventListener('click', () => {
        const input = document.getElementById('numerosInput').value.split(',').map(Number);
        const promedio = calcularPromedio(input);
        document.getElementById('numerosOutput').innerHTML = `Promedio: ${promedio}`;
    });
    document.getElementById('mostrarMinMaxBtn').addEventListener('click', () => {
        const input = document.getElementById('numerosInput').value.split(',').map(Number);
        const minMax = mostrarMinMax(input);
        document.getElementById('numerosOutput').innerHTML = minMax;
    });
    document.getElementById('sumarElementosBtn').addEventListener('click', () => {
        const input = document.getElementById('numerosInput').value.split(',').map(Number);
        const suma = sumarElementos(input);
        document.getElementById('numerosOutput').innerHTML = `Suma: ${suma}`;
    });
    document.getElementById('cuadrarNumerosBtn').addEventListener('click', () => {
        const input = document.getElementById('numerosInput').value.split(',').map(Number);
        const cuadrados = cuadrarNumeros(input);
        document.getElementById('numerosOutput').innerHTML = `Cuadrados: ${cuadrados.join(', ')}`;
    });
});


// Function to reset all inputs and outputs
function resetAll() {
    document.getElementById('numerosInput').value = '';
    document.getElementById('lenguajesOutput').innerHTML = '';
    document.getElementById('numerosOutput').innerHTML = '';
    randomizeTheme();
}

// Function to randomize the theme
function randomizeTheme() {
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#60a5fa', '#8b5cf6', '#10b981'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomGradient = `linear-gradient(135deg, ${randomColor} 0%, ${colors[Math.floor(Math.random() * colors.length)]} 50%, ${colors[Math.floor(Math.random() * colors.length)]} 100%)`;
    document.body.style.background = randomGradient;
}

// Event listener for the reset button
document.getElementById('resetBtn').addEventListener('click', resetAll);

// Initial theme randomization on page load
window.onload = randomizeTheme;
