const fs = require('fs');

let biblioteca = [];

function adicionarLivro(titulo, autor, isbn, ano, generos, emprestado) {
  let novoLivro = {
    nomeDoLivro: titulo,
    quemEscreveu: autor,
    numeroMagicoDoLivro: isbn,
    anoQueFoiPublicado: ano,
    tiposDeHistoria: generos,
    taEmprestado: emprestado
  };
  biblioteca.push(novoLivro);
  console.log("Livro adicionado ao catálogo. ");
}

//Eu sinceramente só entendi essa parte :/