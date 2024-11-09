/*
Exercício 19: Calculadora com Funções
Crie uma função chamada calculadora que receba dois números e uma operação (+, -, *, /) como parâmetros e retorne o resultado da operação matemática.
*/

function calculadora(num1, num2, operacao) {
    return operacao === "+"
      ? num1 + num2
      : operacao === "-"
      ? num1 - num2
      : operacao === "*"
      ? num1 * num2
      : operacao === "/"
      ? num1 / num2
      : "Operação inválida";
  }
  
  console.log(calculadora(10, 5, "+"));
  