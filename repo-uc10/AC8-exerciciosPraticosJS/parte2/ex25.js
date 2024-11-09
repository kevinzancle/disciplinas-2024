/*
Exercício 25: Conversor de Unidades
Nível: Iniciante

Crie um conversor de unidades que:
1. Receba um valor numérico
2. Receba a unidade de origem (kg, g, mg)
3. Receba a unidade de destino
4. Retorne o valor convertido
*/

function converterUnidades(valor, origem, destino) {
    const unidades = {
      kg: 1,
      g: 1000,
      mg: 1000000
    };
  
    if (!unidades[origem] || !unidades[destino]) return "Unidade inválida";
  
    return (valor * unidades[origem]) / unidades[destino];
  }
  
  console.log(converterUnidades(5, "kg", "g"));
  