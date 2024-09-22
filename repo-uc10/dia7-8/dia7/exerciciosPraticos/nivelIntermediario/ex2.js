//Supondo que uma avaliação tenha a nota máxima de 100 pontos. => 0-20 E / 21-40 D / 41-60 C / 61-80 B / 81-100 A
let nota = 101

if(nota >=0 && nota<=20){
    console.log("E")
}
else if(nota >=21 && nota<=40){
    console.log("D")
}
else if(nota >=41 && nota<=60){
    console.log("C")
}
else if(nota >=61 && nota<=80){
    console.log("B")
}
else if(nota >=81 && nota<=100){
    console.log("A")
}else{
    console.log("Digite um número de 0-100!")
}