function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
const numero = parseInt(prompt("Digite um número"));
  
tabuada(numero);