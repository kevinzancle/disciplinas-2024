/*
Exercício 21: Conversor de Temperaturas
Desenvolva uma função que converta temperaturas entre Celsius e Fahrenheit.
A função deve receber um valor numérico, a unidade de origem ("C" ou "F") e a unidade de destino, retornando o valor convertido.
*/


function converterTemperatura(valor, origem, destino) {
    return origem === "C" && destino === "F"
      ? valor * 9/5 + 32
      : origem === "F" && destino === "C"
      ? (valor - 32) * 5/9
      : "Unidade inválida";
  }
  
  console.log(converterTemperatura(25, "C", "F"));
  