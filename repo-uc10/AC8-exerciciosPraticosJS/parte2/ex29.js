/*
Exercício 29: Validador de Senha Forte
Nível: Iniciante/Intermediário

Desenvolva um programa que peça ao usuário para criar uma senha forte.
O programa deve:
1. Verificar se a senha tem pelo menos 8 caracteres
2. Conter letras maiúsculas e minúsculas
3. Conter números
4. Conter caracteres especiais
5. Continuar pedindo até que todos os critérios sejam atendidos
*/

function validarSenha() {
    let senha = prompt("Crie uma senha forte (pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais):");
  
    while (!validarRequisitos(senha)) {
      console.log("A senha não atende aos requisitos.");
      senha = prompt("Crie uma senha forte (pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais):");
    }
  
    console.log("Senha criada com sucesso!");
  
    function validarRequisitos(s) {
      const temMaiuscula = /[A-Z]/.test(s);
      const temMinuscula = /[a-z]/.test(s);
      const temNumero = /\d/.test(s);
      const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(s);
      const temComprimento = s.length >= 8;
  
      return temMaiuscula && temMinuscula && temNumero && temEspecial && temComprimento;
    }
  }
  
  validarSenha();
  