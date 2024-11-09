/*
Exercício 26: Sistema de Notas Musicais
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Receba uma nota musical (C, D, E, F, G, A, B)
2. Mostre a frequência fundamental da nota
3. Indique em qual oitava do piano ela se encontra
4. Mostre uma curiosidade sobre a nota
*/

function notasMusicais(nota) {
    const notas = {
      C: { frequencia: 261.63, oitava: 4, curiosidade: "A nota C é a primeira nota da escala musical tradicional." },
      D: { frequencia: 293.66, oitava: 4, curiosidade: "A nota D é conhecida como uma nota intermediária." },
      E: { frequencia: 329.63, oitava: 4, curiosidade: "A nota E é considerada uma das notas mais 'abertas' na música." },
      F: { frequencia: 349.23, oitava: 4, curiosidade: "A nota F tem uma sensação de tensão e resolução." },
      G: { frequencia: 392.00, oitava: 4, curiosidade: "A nota G é uma das mais usadas em melodias." },
      A: { frequencia: 440.00, oitava: 4, curiosidade: "A nota A é considerada o padrão de afinação para muitos instrumentos." },
      B: { frequencia: 493.88, oitava: 4, curiosidade: "A nota B é a penúltima nota antes do C." }
    };
  
    if (!notas[nota]) return "Nota inválida";
  
    const { frequencia, oitava, curiosidade } = notas[nota];
    return `Nota: ${nota}\nFrequência: ${frequencia} Hz\nOitava: ${oitava}\nCuriosidade: ${curiosidade}`;
  }
  
  console.log(notasMusicais("C"));
  