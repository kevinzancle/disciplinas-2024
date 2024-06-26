const frm = document.querySelector("form")
const resp1 = document.querySelector("#out1")
const resp2 = document.querySelector("#out2")

frm.addEventListener( "submit", (e)=>{
    const remedio = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    const desconto = Math.floor(preco*2)

    resp1.innerText = `O nome do remédio é: ${remedio}`
    resp2.innerText = `O preço após a promoção será: ${desconto}`


e.preventDefault()
})