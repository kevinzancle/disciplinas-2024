let primeiroNum = 10
let segundoNum = 5
let operacao = "*" //Opções : + - / *

if(operacao == "+"){
    console.log(` A soma é: ${primeiroNum+segundoNum}`)
}
else if(operacao == "-"){
    console.log(` A subtração é: ${primeiroNum-segundoNum}`)
}
else if(operacao == "/"){
    console.log(` A divisão é: ${primeiroNum/segundoNum}`)
}
else if(operacao == "*"){
    console.log(` A multiplicação é: ${primeiroNum*segundoNum}`)
} else{
    console.log("Insira uma operação válida")
}
