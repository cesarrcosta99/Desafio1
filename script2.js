// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

/* const tabuada=function(n1) {
    let i=1
    let tabuada=""
    while(i <= 10) {
        console.log(`${n1} * ${i} = ${n1 * i}`)
        i++
    }
}

tabuada(10) */

const tabuada=function(n1) {
  if(n1 < 1 || n1 > 10){
    return "Escreva um número entre 1 e 10"
  }
  let result=""
  for(let i = 0;i <=10; i++) {
    result=result + `${n1} * ${i} = ${n1 * i}\n`
  }
    return result
}
 console.log(tabuada(0))