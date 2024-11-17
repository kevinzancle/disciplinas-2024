/*
Exercício 32: Analisador de Números Primos
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Encontre todos os números primos em um intervalo
2. Mostre a decomposição em fatores primos de um número
3. Calcule quantos números primos existem até um determinado valor
*/

let inicio = parseInt(prompt("Digite o início do intervalo:"));
let fim = parseInt(prompt("Digite o fim do intervalo:"));

function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primosIntervalo = [];
for (let i = inicio; i <= fim; i++) {
    if (ehPrimo(i)) primosIntervalo.push(i);
}
console.log("Números primos no intervalo:", primosIntervalo.join(", "));

let numero = parseInt(prompt("Digite um número para decomposição em fatores primos:"));
let fatoresPrimos = [];
let divisor = 2;
while (numero > 1) {
    if (numero % divisor === 0) {
        fatoresPrimos.push(divisor);
        numero /= divisor;
    } else {
        divisor++;
    }
}
console.log("Fatores primos:", fatoresPrimos.join(" x "));

let limite = parseInt(prompt("Digite um valor para contar números primos até ele:"));
let contagemPrimos = 0;
for (let i = 2; i <= limite; i++) {
    if (ehPrimo(i)) contagemPrimos++;
}
console.log("Quantidade de números primos até", limite, ":", contagemPrimos);
