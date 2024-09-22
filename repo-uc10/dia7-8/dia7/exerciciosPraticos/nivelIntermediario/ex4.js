//Critérios = ao menos 8 caracteres, um número e uma letra maiúscula.

let senha = "SenhaFort399"

if(senha.length>=8 && /\d/.test(senha)  && /[A-Z]/.test(senha) ){
    console.log("Senha válida")
}else{
    console.log("Senha inválida")
}