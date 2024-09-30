let a = 0;
let b = 1;
let contador = 0;

console.log(a);
console.log(b);

while (contador < 18) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
  contador++;
}