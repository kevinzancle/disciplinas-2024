/*
Exercício 24: Aprovação de Empréstimo
Nível: Intermediário

Crie um sistema que avalie a elegibilidade para empréstimo baseado em múltiplos critérios:
1. Receba: salário, idade, tempo de emprego e valor do empréstimo desejado
2. Analise os critérios
3. Forneça o resultado com feedback específico
4. Calcule e mostre o valor máximo disponível quando aplicável
*/

function avaliarEmprestimo(salario, idade, tempoEmprego, valorEmprestimo) {
    let elegivel = true;
    let feedback = "";
    let valorMaximo = salario * 10;
  
    if (idade < 18 || idade > 65) {
      elegivel = false;
      feedback = "Idade inválida para empréstimo.";
    } else if (tempoEmprego < 1) {
      elegivel = false;
      feedback = "Tempo de emprego insuficiente para solicitar empréstimo.";
    } else if (valorEmprestimo > valorMaximo) {
      elegivel = false;
      feedback = `O valor solicitado excede o limite de empréstimo. O valor máximo disponível é R$${valorMaximo}.`;
    } else {
      feedback = "Empréstimo aprovado!";
    }
  
    return `${feedback}\nValor Máximo Disponível: R$${valorMaximo}`;
  }
  
  console.log(avaliarEmprestimo(2500, 30, 2, 15000));
  
