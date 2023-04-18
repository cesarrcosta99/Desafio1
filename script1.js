// Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou

const namber=(num) => {
    let result=[]
    for(i =1;i <= num;i++){
       result.push(i)
        
    }
    return result
}

console.log(namber(10).join(""))

