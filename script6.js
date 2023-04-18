// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
const array=[
    {
        name:"César",
        salario:18000,
        filhos:2
    },
    {
        name:"Julio",
        salario:15000,
        filhos:3,
    },
    {
        name:"Breno",
        salario:3000,
        filhos:2
    },
    {
        name:"Viviane",
        salario:35000,
        filhos:1
    },
    {
        name:"Matheus",
        salario:-2300,
        filhos:2
    }
]

const cityHall=()=> {
    let salario=0
    let i=0
    let filhos=0
    let maiorSalario=array[0].salario
    

     while(i < array.length) {

        if(maiorSalario < array[i].salario){
            maiorSalario=array[i].salario
          }

        if(array[i].salario < 0) {
           console.log(`Media de salario R$${(salario / i).toFixed(2)}`)
           console.log(`Media de Filhos R$${(filhos / i ).toFixed(2)}`)
           console.log(`Maior salario R$${maiorSalario}`)
            break
        }else{ 
          
        salario+=array[i].salario
        filhos+=array[i].filhos
        i++
    }
     }
     
}

cityHall()