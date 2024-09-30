function verificarSenha() {
    let senha = prompt("Digite uma senha (mínimo 8 caracteres):");
  
    while (senha.length < 8) {
      senha = prompt("Senha muito curta! Digite novamente (mínimo 8 caracteres):");
    }
  
    alert("Senha válida!");
  }
  
  verificarSenha();