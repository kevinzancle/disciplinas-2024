/*
Exercício 33: Matriz de Multiplicação Interativa
Nível: Intermediário

Crie um programa que:
1. Gere uma tabela de multiplicação customizada
2. Permita definir intervalo inicial e final
3. Destaque os quadrados perfeitos
4. Calcule estatísticas sobre os resultados
*/

let inicio = parseInt(prompt("Digite o número inicial:"));
let fim = parseInt(prompt("Digite o número final:"));

function ehQuadradoPerfeito(num) {
    return Number.isInteger(Math.sqrt(num));
}

let tabela = [];
for (let i = inicio; i <= fim; i++) {
    let linha = [];
    for (let j = inicio; j <= fim; j++) {
        linha.push(i * j);
    }
    tabela.push(linha);
}

console.log("Tabela de Multiplicação:");
tabela.forEach((linha, i) => {
    console.log(`Linha ${inicio + i}:`, linha.join(", "));
});

let quadradosPerfeitos = [];
let somaResultados = 0;
let totalResultados = 0;

tabela.forEach(linha => {
    linha.forEach(valor => {
        somaResultados += valor;
        totalResultados++;
        if (ehQuadradoPerfeito(valor)) quadradosPerfeitos.push(valor);
    });
});

console.log("Quadrados Perfeitos:", [...new Set(quadradosPerfeitos)].join(", "));
console.log("Soma dos Resultados:", somaResultados);
console.log("Média dos Resultados:", (somaResultados / totalResultados).toFixed(2));
