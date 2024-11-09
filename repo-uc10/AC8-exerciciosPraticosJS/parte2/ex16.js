/*
Exercício 16: Sistema de Cadastro de Aluno
Crie um objeto que represente um aluno com propriedades para nome, idade, notas (array com 3 notas) e endereço (outro objeto com rua e número). 
O programa deve mostrar os dados do aluno e calcular sua média.
*/

const aluno = {
    nome: "Sebastião",
    idade: 20,
    notas: [8, 7.5, 9],
    endereco: {
      rua: "Rua ruada",
      numero: 1
    }
  };
  
  const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / aluno.notas.length;
  
  console.log(`Nome: ${aluno.nome}\nIdade: ${aluno.idade}\nEndereço: ${aluno.endereco.rua}, ${aluno.endereco.numero}\nMédia: ${media}`);
  