/*
Exercício 40: Calculadora de Estatísticas
Nível: Iniciante/Intermediário

Crie uma série de funções que:
1. Calculem diferentes medidas estatísticas
2. Trabalhem com arrays de números
3. Forneçam análises detalhadas
*/

function calcularMedia(array) {
    let soma = array.reduce((acc, num) => acc + num, 0);
    return (soma / array.length).toFixed(2);
}

function calcularMediana(array) {
    array.sort((a, b) => a - b);
    let meio = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        return ((array[meio - 1] + array[meio]) / 2).toFixed(2);
    } else {
        return array[meio].toFixed(2);
    }
}

function calcularModa(array) {
    let frequencias = {};
    array.forEach(num => frequencias[num] = (frequencias[num] || 0) + 1);
    let maxFreq = Math.max(...Object.values(frequencias));
    let modas = [];
    for (let num in frequencias) {
        if (frequencias[num] === maxFreq) modas.push(num);
    }
    return modas.join(", ");
}

function calcularDesvioPadrao(array) {
    let media = calcularMedia(array);
    let somaQuadrados = array.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
    let variancia = somaQuadrados / array.length;
    return Math.sqrt(variancia).toFixed(2);
}

let numeros = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7];

console.log("Média:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Moda:", calcularModa(numeros));
console.log("Desvio Padrão:", calcularDesvioPadrao(numeros));
