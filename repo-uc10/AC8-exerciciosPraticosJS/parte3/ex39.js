/*
Exercício 39: Gerenciador de E-commerce
Nível: Intermediário/Avançado

Desenvolva um sistema de e-commerce com:
1. Cadastro de produtos e categorias
2. Gerenciamento de estoque
3. Processamento de pedidos
4. Sistema de descontos e promoções
*/

let produtos = [];
let categorias = [];
let pedidos = [];

function cadastrarCategoria(nome) {
    categorias.push(nome);
}

function cadastrarProduto(nome, categoria, preco, estoque) {
    if (!categorias.includes(categoria)) {
        console.log("Categoria não encontrada!");
        return;
    }
    produtos.push({ nome, categoria, preco, estoque });
}

function listarProdutos() {
    console.log("Produtos disponíveis:");
    produtos.forEach(produto => {
        console.log(`${produto.nome} - R$${produto.preco.toFixed(2)} - Estoque: ${produto.estoque}`);
    });
}

function processarPedido(nomeProduto, quantidade) {
    let produto = produtos.find(prod => prod.nome === nomeProduto);
    if (produto && produto.estoque >= quantidade) {
        produto.estoque -= quantidade;
        pedidos.push({ produto: nomeProduto, quantidade, total: produto.preco * quantidade });
        console.log(`Pedido de ${quantidade} unidade(s) de "${nomeProduto}" processado com sucesso!`);
    } else {
        console.log("Estoque insuficiente ou produto não encontrado.");
    }
}

function aplicarDesconto(pedidoId, desconto) {
    let pedido = pedidos[pedidoId];
    if (pedido) {
        let valorDesconto = pedido.total * (desconto / 100);
        pedido.total -= valorDesconto;
        console.log(`Desconto de ${desconto}% aplicado. Novo total: R$${pedido.total.toFixed(2)}`);
    } else {
        console.log("Pedido não encontrado.");
    }
}

cadastrarCategoria("Eletrônicos");
cadastrarCategoria("Roupas");

cadastrarProduto("Smartphone", "Eletrônicos", 1500, 20);
cadastrarProduto("Camiseta", "Roupas", 50, 100);

listarProdutos();
processarPedido("Smartphone", 2);
processarPedido("Camiseta", 5);

aplicarDesconto(0, 10);
