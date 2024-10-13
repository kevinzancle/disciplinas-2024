const readlineSync = require('readline-sync');

function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function multi(a,b){
    return a*b
}

function div(a,b){
    return a/b
}
const operation = readlineSync.question("Digite a operação desejada: ")
const num1 = parseFloat(readlineSync.question("Digite o primeiro número: "))
const num2 = parseFloat(readlineSync.question("Digite o segundo número: "))
let result = ""
function calculadora(operation){
switch (operation) {
    case "sum":
        result = sum(num1,num2)
        console.log("O resultado é: "+result)
        break;
    case "div":
        if(num2 === 0){
            console.log("ERROR")
        }else{
            result = div(num1,num2)
            console.log("O resultado é: "+result)
        }
        
        break;
    case "sub":
        result = sub(num1,num2)
        console.log("O resultado é: "+result)
        break;
    case "multi":
        result = multi(num1,num2)
        console.log("O resultado é: "+result)
        break;        
    default:
        break;
}
}

calculadora(operation);

