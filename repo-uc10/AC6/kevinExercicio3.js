const frm = document.querySelector("form")
const resp1 = document.querySelector("#out1")

frm.addEventListener("submit", (e)=>{
    const valor = Number(frm.inValor.value)
    const tratamento = (valor/2)*3

    resp1.innerText = `Deverá ser pago R$: ${tratamento} após o desconto ser aplicado!`
    
    e.preventDefault()

})