/*
Exercício 20: Verificador de Palíndromo
Crie uma função que receba uma palavra ou frase e verifique se ela é um palíndromo (se pode ser lida da mesma forma de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).
*/

function verificarPalindromo(texto) {
    const formatado = texto.toLowerCase().replace(/\s+/g, "");
    return formatado === formatado.split("").reverse().join("");
  }
  
  console.log(verificarPalindromo("Apos a sopa"));
  