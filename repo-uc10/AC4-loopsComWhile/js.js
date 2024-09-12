    const prompt = require('readline-sync')

    let saldo = parseFloat(1000.00).toFixed(2);
    let continuar = true

    while(continuar){
        let opcao = parseInt(prompt.question("Operações disponíveis:\n 1-Sacar \n 2-Depositar \n 3-Saldo \n 4-Sair \n Digite o número da operação desejada: "))

        switch(opcao){
            case 1:
                let saque = prompt.question("Digite o valor do saque: ")

                if(saldo < saque){
                    console.clear()
                    console.log("Saldo insuficiente")
                }else{
                    console.clear()
                    console.log(`Seu novo saldo é R$${saldo -= saque}`)
                }
                break;
                
            case 2:
                let deposito = parseFloat(prompt.question("Digite o valor do deposito: "))

                saldo += deposito
                console.clear()
                console.log(`Seu novo saldo é R$${saldo}`)

                break;

            case 3:
                console.clear()
                console.log(`Seu saldo atual é R$${saldo}`)
                break;

            case 4:
                continuar = false
                console.log("Obrigado, volte sempre!")
                break; 
            
            default:
                console.clear()
                console.log("Operação inválida")
                break;
        }
            
            
    }