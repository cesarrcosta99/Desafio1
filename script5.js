// Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
const bigger=(n1,n2) => {
    if(n1 > n2) {
        return `O numéro maior é ${n1}`
    }else {
        return `O número maior é ${n2}`
    }
}

console.log(bigger(12,25))