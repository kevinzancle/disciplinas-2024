/*
Exercício 22: Verificador de Maioridade Internacional
Nível: Iniciante

Crie um programa que determine se uma pessoa pode beber álcool em diferentes países.
O programa deve:
1. Receber a idade da pessoa
2. Verificar e informar se ela pode beber nos seguintes lugares:
   - Brasil e EUA (21 anos)
   - Japão e Indonésia (20 anos)
   - Portugal e Alemanha (16 anos)
*/

function verificarMaioridade(idade) {
    const brasilEUA = idade >= 21 ? "Sim" : "Não";
    const japaoIndonesia = idade >= 20 ? "Sim" : "Não";
    const portugalAlemanha = idade >= 16 ? "Sim" : "Não";
  
    return `Pode beber no Brasil e EUA: ${brasilEUA}\nPode beber no Japão e Indonésia: ${japaoIndonesia}\nPode beber em Portugal e Alemanha: ${portugalAlemanha}`;
  }
  