/*
Exercício 23: Calculadora de IMC com Recomendações
Nível: Iniciante/Intermediário

Desenvolva uma calculadora de IMC que além de mostrar o índice:
1. Receba peso e altura
2. Calcule o IMC
3. Classifique em categorias
4. Forneça uma recomendação personalizada para cada faixa
*/

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let categoria = "";
    let recomendacao = "";
  
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      recomendacao = "Tente aumentar a ingestão de calorias de forma saudável.";
    } else if (imc >= 18.5 && imc < 24.9) {
      categoria = "Peso normal";
      recomendacao = "Continue mantendo uma alimentação equilibrada.";
    } else if (imc >= 25 && imc < 29.9) {
      categoria = "Sobrepeso";
      recomendacao = "Considere a prática regular de atividades físicas e ajuste sua alimentação.";
    } else {
      categoria = "Obesidade";
      recomendacao = "É recomendável consultar um médico para orientações sobre emagrecimento saudável.";
    }
  
    return `IMC: ${imc.toFixed(2)}\nCategoria: ${categoria}\nRecomendação: ${recomendacao}`;
  }
  
  console.log(calcularIMC(70, 1.75));
  