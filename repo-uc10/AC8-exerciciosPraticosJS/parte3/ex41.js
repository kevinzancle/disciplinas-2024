/*
Exercício 41: Processador de Textos
Nível: Intermediário

Desenvolva funções que:
1. Analisem e processem texto
2. Contem palavras e caracteres
3. Encontrem padrões
4. Gerem relatórios de análise
*/

function contarPalavras(texto) {
    let palavras = texto.trim().split(/\s+/);
    return palavras.length;
}

function contarCaracteres(texto) {
    return texto.replace(/\s/g, '').length;
}

function encontrarPadrão(texto, padrao) {
    let regex = new RegExp(padrao, 'g');
    return (texto.match(regex) || []).length;
}

function gerarRelatorio(texto) {
    console.log("Relatório de Análise de Texto:");
    console.log("Número de palavras:", contarPalavras(texto));
    console.log("Número de caracteres (sem espaços):", contarCaracteres(texto));
    console.log("Número de ocorrências da palavra 'JavaScript':", encontrarPadrão(texto, "JavaScript"));
}

let texto = "JavaScript é uma linguagem poderosa. JavaScript é muito usada para desenvolvimento web.";

gerarRelatorio(texto);
