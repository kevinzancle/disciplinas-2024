const frm = document.querySelector("form")
const resp1 = document.querySelector("#out1")

frm.addEventListener("submit", (e)=>{
    const valor = 10
    const tempo = Number(frm.inTempo.value)

    const resto =  (tempo%10)
    const inteiro = (tempo/10).toFixed(2)
    const transformar = resto+(10-pagar)
    const resultado = inteiro+transformar

    resp1.innerText = `Deverá ser pago R$: ${resultado}`
    
    e.preventDefault()

})

//nao entendi