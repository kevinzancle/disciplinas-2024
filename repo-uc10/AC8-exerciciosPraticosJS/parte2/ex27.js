/*
Exercício 27: Simulador de Caixa Eletrônico
Nível: Intermediário

Crie um simulador de caixa eletrônico que:
1. Mostre um menu de operações (saque, depósito, saldo, pagamentos)
2. Processe a operação escolhida
3. Valide valores e limites
4. Forneça feedback apropriado
*/

let saldo = 1000;

function menu() {
  console.log("Escolha uma operação:");
  console.log("1. Saque");
  console.log("2. Depósito");
  console.log("3. Saldo");
  console.log("4. Pagamentos");

  const opcao = prompt("Digite a opção desejada (1-4):");

  switch (opcao) {
    case "1":
      saque();
      break;
    case "2":
      deposito();
      break;
    case "3":
      mostrarSaldo();
      break;
    case "4":
      pagamentos();
      break;
    default:
      console.log("Opção inválida.");
  }
}

function saque() {
  const valor = parseFloat(prompt("Digite o valor do saque:"));
  if (isNaN(valor) || valor <= 0) {
    console.log("Valor inválido.");
  } else if (valor > saldo) {
    console.log("Saldo insuficiente.");
  } else {
    saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
  }
  menu();
}

function deposito() {
  const valor = parseFloat(prompt("Digite o valor do depósito:"));
  if (isNaN(valor) || valor <= 0) {
    console.log("Valor inválido.");
  } else {
    saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
  }
  menu();
}

function mostrarSaldo() {
  console.log(`Seu saldo atual é R$${saldo.toFixed(2)}`);
  menu();
}

function pagamentos() {
  const valor = parseFloat(prompt("Digite o valor do pagamento:"));
  if (isNaN(valor) || valor <= 0) {
    console.log("Valor inválido.");
  } else if (valor > saldo) {
    console.log("Saldo insuficiente.");
  } else {
    saldo -= valor;
    console.log(`Pagamento de R$${valor.toFixed(2)} realizado com sucesso.`);
  }
  menu();
}

menu();
