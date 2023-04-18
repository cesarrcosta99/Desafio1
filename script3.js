// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const hour=()=>{
   return `${new Date().toLocaleTimeString("pt-BR")}:${new Date().getMinutes()} - anoatual:${new Date().getFullYear()}`
}
console.log(hour())

console.log(new Date())

console.log(new Date().getMonth()+ 1)