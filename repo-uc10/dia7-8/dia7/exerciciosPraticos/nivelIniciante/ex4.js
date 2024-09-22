function checarBissexto(ano){
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)
}

let ano = 2028
if(checarBissexto(ano)){
    console.log("É bissexto")
} else{
    console.log("Não é bissexto")
}