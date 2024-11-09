/*
Exercício 30: Sistema de Caixa de Restaurante
Nível: Intermediário

Crie um sistema de caixa para um restaurante que:
1. Permita adicionar itens ao pedido
2. Calcule o total
3. Aplique descontos baseados em condições
4. Permita diferentes formas de pagamento
5. Calcule o troco quando necessário
*/

let pedido = [];
let total = 0;

function adicionarItem(nome, preco) {
  pedido.push({ nome, preco });
  total += preco;
}

function aplicarDesconto(desconto) {
  total -= total * (desconto / 100);
}

function calcularTroco(pagamento) {
  return pagamento - total;
}

function exibirResumo() {
  console.log("Resumo do Pedido:");
  pedido.forEach(item => console.log(`${item.nome}: R$${item.preco.toFixed(2)}`));
  console.log(`Total: R$${total.toFixed(2)}`);
}

function finalizarPedido(pagamento) {
  if (pagamento < total) {
    console.log("Pagamento insuficiente.");
  } else {
    const troco = calcularTroco(pagamento);
    console.log(`Pagamento realizado com sucesso. Seu troco é R$${troco.toFixed(2)}.`);
  }
}

// Exemplo de uso
adicionarItem("Prato do Dia", 25.00);
adicionarItem("Refrigerante", 5.00);
aplicarDesconto(10);  // Desconto de 10%
exibirResumo();
finalizarPedido(30.00);
