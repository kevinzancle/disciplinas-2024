/*
Exercício 34: Gerenciador de Tarefas
Nível: Iniciante

Crie um programa que gerencie uma lista de tarefas, permitindo:
1. Adicionar novas tarefas com prioridade
2. Marcar tarefas como concluídas
3. Remover tarefas
4. Listar tarefas por status ou prioridade
*/

let tarefas = [];

function adicionarTarefa(descricao, prioridade) {
    tarefas.push({ descricao, prioridade, concluida: false });
}

function marcarConcluida(indice) {
    if (tarefas[indice]) tarefas[indice].concluida = true;
}

function removerTarefa(indice) {
    if (tarefas[indice]) tarefas.splice(indice, 1);
}

function listarTarefas(filtro = "todas") {
    if (filtro === "todas") {
        console.log("Todas as tarefas:", tarefas);
    } else if (filtro === "concluidas") {
        console.log("Tarefas concluídas:", tarefas.filter(tarefa => tarefa.concluida));
    } else if (filtro === "pendentes") {
        console.log("Tarefas pendentes:", tarefas.filter(tarefa => !tarefa.concluida));
    } else if (filtro === "prioridade") {
        console.log("Tarefas por prioridade:", tarefas.sort((a, b) => a.prioridade - b.prioridade));
    }
}

adicionarTarefa("Comprar leite", 2);
adicionarTarefa("Estudar JavaScript", 1);
adicionarTarefa("Fazer exercícios", 3);

marcarConcluida(1);

listarTarefas("todas");
removerTarefa(0);
listarTarefas("prioridade");
