/*
Exercício 38: Simulador de Banco Digital
Nível: Intermediário

Crie um sistema bancário que permita:
1. Criar e gerenciar contas
2. Realizar transações
3. Calcular juros e taxas
4. Gerar extratos
*/

let contas = [];

function criarConta(nome, saldoInicial = 0) {
    contas.push({ nome, saldo: saldoInicial, historico: [] });
}

function buscarConta(nome) {
    return contas.find(conta => conta.nome === nome);
}

function depositar(nome, valor) {
    let conta = buscarConta(nome);
    if (conta) {
        conta.saldo += valor;
        conta.historico.push({ tipo: "Depósito", valor });
    }
}

function sacar(nome, valor) {
    let conta = buscarConta(nome);
    if (conta && conta.saldo >= valor) {
        conta.saldo -= valor;
        conta.historico.push({ tipo: "Saque", valor });
    }
}

function calcularJuros(nome, taxa) {
    let conta = buscarConta(nome);
    if (conta) {
        let juros = conta.saldo * (taxa / 100);
        conta.saldo += juros;
        conta.historico.push({ tipo: "Juros", valor: juros });
    }
}

function gerarExtrato(nome) {
    let conta = buscarConta(nome);
    if (conta) {
        console.log("Extrato de:", conta.nome);
        console.log("Saldo atual:", conta.saldo.toFixed(2));
        console.log("Histórico:");
        conta.historico.forEach(transacao => {
            console.log(`${transacao.tipo}: R$${transacao.valor.toFixed(2)}`);
        });
    }
}

criarConta("Maria", 500);
depositar("Maria", 200);
sacar("Maria", 100);
calcularJuros("Maria", 5);
gerarExtrato("Maria");
