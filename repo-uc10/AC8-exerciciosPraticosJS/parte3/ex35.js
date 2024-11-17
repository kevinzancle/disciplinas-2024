/*
Exercício 35: Analisador de Dados Climáticos
Nível: Iniciante/Intermediário

Desenvolva um programa que analise dados climáticos, permitindo:
1. Registrar temperaturas diárias
2. Calcular médias por período
3. Identificar tendências
4. Gerar relatórios estatísticos
*/

let temperaturas = [];

function registrarTemperatura(temp) {
    temperaturas.push(temp);
}

function calcularMedia(inicio, fim) {
    let periodo = temperaturas.slice(inicio, fim + 1);
    let soma = periodo.reduce((acc, temp) => acc + temp, 0);
    return (soma / periodo.length).toFixed(2);
}

function identificarTendencia() {
    if (temperaturas.length < 2) return "Dados insuficientes";
    let tendencia = temperaturas[temperaturas.length - 1] > temperaturas[temperaturas.length - 2] ? "Alta" : "Baixa";
    return `Última tendência: ${tendencia}`;
}

function gerarRelatorio() {
    let max = Math.max(...temperaturas);
    let min = Math.min(...temperaturas);
    let media = calcularMedia(0, temperaturas.length - 1);
    console.log("Relatório Climático:");
    console.log("Temperatura máxima:", max);
    console.log("Temperatura mínima:", min);
    console.log("Média geral:", media);
    console.log(identificarTendencia());
}

registrarTemperatura(25);
registrarTemperatura(28);
registrarTemperatura(30);
registrarTemperatura(27);
registrarTemperatura(26);

console.log("Média do período 1-3:", calcularMedia(1, 3));
console.log(identificarTendencia());
gerarRelatorio();
