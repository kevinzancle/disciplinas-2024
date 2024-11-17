/*
Exercício 31: Gerador de Sequência de Fibonacci
Nível: Iniciante

Crie um programa que gere a sequência de Fibonacci até um determinado termo n.
O programa deve:
1. Receber o número de termos desejado
2. Gerar e mostrar a sequência
3. Identificar números pares e ímpares na sequência
4. Calcular a soma dos números gerados
*/

let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
let fibonacci = [0, 1];
for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log("Sequência de Fibonacci:", fibonacci.join(", "));
let pares = fibonacci.filter(num => num % 2 === 0);
let impares = fibonacci.filter(num => num % 2 !== 0);
console.log("Números pares:", pares.join(", "));
console.log("Números ímpares:", impares.join(", "));
let soma = fibonacci.reduce((acc, num) => acc + num, 0);
console.log("Soma dos números:", soma);
