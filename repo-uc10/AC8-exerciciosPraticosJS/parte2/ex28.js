/*
Exercício 28: Jogo de Adivinhação Aprimorado
Nível: Iniciante

Crie um jogo onde o computador escolhe um número aleatório e o jogador deve adivinhar.
O programa deve:
1. Gerar um número aleatório entre 1 e 100
2. Dar dicas se o palpite está alto ou baixo
3. Contar o número de tentativas
4. Limitar o número máximo de tentativas
*/

function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const tentativasMaximas = 10;
  
    function verificarPalpite(palpite) {
      tentativas++;
      if (tentativas > tentativasMaximas) {
        console.log(`Você excedeu o número máximo de tentativas. O número era ${numeroAleatorio}.`);
        return;
      }
      if (palpite < numeroAleatorio) {
        console.log("Tente um número maior.");
      } else if (palpite > numeroAleatorio) {
        console.log("Tente um número menor.");
      } else {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
      }
    }
  
    while (tentativas < tentativasMaximas) {
      const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
      if (!isNaN(palpite)) {
        verificarPalpite(palpite);
        if (palpite === numeroAleatorio) break;
      } else {
        console.log("Por favor, insira um número válido.");
      }
    }
  }
  
  jogoAdivinhacao();
  