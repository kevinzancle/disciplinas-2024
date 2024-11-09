/*
Exercício 17: Gerenciador de Estoque
Crie um objeto produto com propriedades nome, preço e quantidade, e um método que calcule o valor total (preço * quantidade). O programa deve mostrar os dados do produto e o valor total do estoque.
*/

javascript
const produto = {
  nome: "Camiseta",
  preco: 50,
  quantidade: 20,
  valorTotal() {
    return this.preco * this.quantidade;
  }
};

console.log(`Produto: ${produto.nome}\nPreço: R$${produto.preco}\nQuantidade: ${produto.quantidade}\nValor Total do Estoque: R$${produto.valorTotal()}`);
