function checarPalindromo(str) {
    
    let stringLimpa = str.toLowerCase()
    
    
    let tamanho = stringLimpa.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (stringLimpa[i] !== stringLimpa[tamanho - 1 - i]) {
            return false; 
        }
    }
    return true;
}

console.log(checarPalindromo("arara")); 

