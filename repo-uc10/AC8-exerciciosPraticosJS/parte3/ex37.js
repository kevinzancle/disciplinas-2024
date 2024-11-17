/*
Exercício 37: Sistema de Gestão Escolar
Nível: Iniciante/Intermediário

Desenvolva um sistema que gerencie:
1. Cadastro de alunos e professores
2. Registro de notas e frequência
3. Cálculo de médias e situação final
4. Geração de boletins
*/

let alunos = [];
let professores = [];

function cadastrarPessoa(tipo, nome) {
    if (tipo === "aluno") alunos.push({ nome, notas: [], frequencia: 0 });
    if (tipo === "professor") professores.push({ nome });
}

function registrarNota(nomeAluno, nota) {
    let aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (aluno) aluno.notas.push(nota);
}

function registrarFrequencia(nomeAluno, frequencia) {
    let aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (aluno) aluno.frequencia += frequencia;
}

function calcularMedia(nomeAluno) {
    let aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (!aluno || aluno.notas.length === 0) return 0;
    let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    return (soma / aluno.notas.length).toFixed(2);
}

function situacaoFinal(nomeAluno) {
    let media = calcularMedia(nomeAluno);
    let aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (!aluno) return "Aluno não encontrado";
    return media >= 6 && aluno.frequencia >= 75 ? "Aprovado" : "Reprovado";
}

function gerarBoletim(nomeAluno) {
    let aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (!aluno) return "Aluno não encontrado";
    console.log("Boletim de:", aluno.nome);
    console.log("Notas:", aluno.notas.join(", "));
    console.log("Média:", calcularMedia(nomeAluno));
    console.log("Frequência:", aluno.frequencia + "%");
    console.log("Situação Final:", situacaoFinal(nomeAluno));
}

cadastrarPessoa("aluno", "João");
cadastrarPessoa("professor", "Ana");

registrarNota("João", 8);
registrarNota("João", 7);
registrarFrequencia("João", 80);

gerarBoletim("João");
