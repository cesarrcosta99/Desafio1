/*  Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
 Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo. */

  function fees(valorinicial,valoratual,tempo) {
    const taxa=(valoratual - valorinicial) / (valorinicial * tempo) 
    return `${(taxa * 100).toFixed(1)}% `
  }

  console.log(fees(1000,1200,10))
