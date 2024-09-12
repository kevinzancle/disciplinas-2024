/*1. Use o método Array.from() para criar um array a partir da string
"HELLO". Cada letra deve ser um elemento do array. Imprima o
resultado.*/

const hello = "HELLO"
const array = Array.from(hello);
console.log(array)

/*2. Crie um array chamado pares usando Array.from() e uma função
de mapeamento para gerar os primeiros 5 números pares (2, 4, 6,
8, 10). Imprima o array.*/

const pares = Array.from(2,4,6,8,10)
console.log(pares)

/*3. Utilize o método Array.of() para criar um array chamado mix que
contenha um número, uma string e um booleano. Imprima o
array e o tipo de cada elemento usando typeof.*/

const mix = Array.of(1, "string", true);
console.log(typeof mix[0])
console.log(typeof mix[1])
console.log(typeof mix[2])
