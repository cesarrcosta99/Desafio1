/* const discount=(nome,valortotal,primeiracompra,vista)=> {
    if(primeiracompra === true && vista === true && valortotal > 1000) {
        const valorDesconto=valortotal * 0.70
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 30% de desconto só aqui na loja identidade`
    } else if(primeiracompra === true && vista === true && valortotal < 1000 && valortotal > 500 ) {
        const valorDesconto=valortotal * 0.75
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 25% de desconto só aqui na loja identidade`

    } else if(primeiracompra === true && vista === true && valortotal < 500) {
        const valorDesconto=valortotal * 0.80
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`
    } else if(primeiracompra === true && vista === false && valortotal > 1000){
        const valorDesconto=valortotal * 0.80
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`
    } else if(primeiracompra === true && vista === false && valortotal < 1000 && valortotal > 500) {
        const valorDesconto=valortotal * 0.85
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 15% de desconto só aqui na loja identidade`

    } else if(primeiracompra === true && vista === false && valortotal < 500){
        const valorDesconto=valortotal * 0.90
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`

    } else if(primeiracompra === false && vista === true && valortotal > 1000 ) {
        const valorDesconto=valortotal * 0.80
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`

    }else if(primeiracompra === false && vista === true && valortotal < 1000 && valortotal > 500) {
        const valorDesconto=valortotal * 0.85
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 15% de desconto só aqui na loja identidade`
    }
     else if(primeiracompra === false && vista === true && valortotal < 500) {
        const valorDesconto=valortotal * 0.90
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`
    }else if(primeiracompra === false && vista === false && valortotal > 1000) {
        const valorDesconto=valortotal * 0.90
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`
    } else if(primeiracompra === false && vista === false && valortotal < 1000 && valortotal > 500) {
        const valorDesconto=valortotal * 0.95
        return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 5% de desconto só aqui na loja identidade`
    } else{
        const desconto=  Math.floor(Math.random() * 11)+ 10
        return `Muito obrigado pela compra ${nome}\n 
        Valor Total da compra:${valortotal} \n 
         Cupom de desconto para a proxima compra:${desconto}%`
    }
}

console.log(discount("César",550,false,false)) */

//Jeito mais pratico

const discount = (nome, valortotal, primeiracompra, vista) => {
    if (primeiracompra && vista) {
        if (valortotal >= 1000) {
            const valorDesconto = valortotal * 0.70
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 30% de desconto só aqui na loja identidade`
        } else if (valortotal < 500) {
            const valorDesconto = valortotal * 0.80
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`


        } else {
            const valorDesconto = valortotal * 0.75
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 25% de desconto só aqui na loja identidade`

        }
    }

    if (primeiracompra && !vista) {
        if (valortotal >= 1000) {
            const valorDesconto = valortotal * 0.80
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`
        } else if (valortotal < 500) {
            const valorDesconto = valortotal * 0.90
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`


        } else {
            const valorDesconto = valortotal * 0.85
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 15% de desconto só aqui na loja identidade`
        }

    }

    if (!primeiracompra && vista) {
        if (valortotal >= 1000) {
            const valorDesconto = valortotal * 0.80
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 20% de desconto só aqui na loja identidade`

        } else if (valortotal < 500) {
            const valorDesconto = valortotal * 0.90
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`


        } else {
            const valorDesconto = valortotal * 0.85
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 15% de desconto só aqui na loja identidade`

        }

    }

    if (!primeiracompra && !vista) {
        if (valortotal >= 1000) {
            const valorDesconto = valortotal * 0.90
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 10% de desconto só aqui na loja identidade`
        } else if (valortotal < 500) {
            const desconto = Math.floor(Math.random() * (20 - 10) + 10)
            return `Muito obrigado pela compra ${nome}\n 
            Valor Total da compra:${valortotal} \n 
            Cupom de desconto para a proxima compra:${desconto}%`

        } else {
            const valorDesconto = valortotal * 0.95
            return `Muito obrigado pela compra ${nome}!\n Valor Total sem desconto:${valortotal} \n Valor com Desconto:${valorDesconto}\n 5% de desconto só aqui na loja identidade`

        }

    }
}

console.log(discount("César", 400, false, false))