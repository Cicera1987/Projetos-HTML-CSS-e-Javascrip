//Sessão de exercicios de Orientação e objetos

//02 - Crie uma classe que simula um carrinho de compra de im e-commerce
// propiedades itens, quantidade total, valor total;
// Crie os metodfos para adicionar e remover itens
//Teste os métodos

class Carrinho {   //Inicio da class - parte 01
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }


    addItem(item) {  // criar o addItens - for/if - para adicionar itens - parte 4 
        
        let contador = 0; // adicionando um novo item - parte 7
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;  // caso ja exista o item - contador inicia com 1.   parte 7     
            }
        }

        if(contador == 0) { // contador da adição do novo tem - parte 7
            this.itens.push(item);
    }

        this.qtd += item.qtd;
        this.valorTotal += item.precoUnt * item.qtd;
}

removeItem(item) { // função de remover - parte 9
    
    for(let itemCarrinho in this.itens) {
        if(this.itens[itemCarrinho].id == item.id) {

            let obj = this.itens[itemCarrinho];
            let index = this.itens.findIndex(function(obj) {return obj.id == item.id });

            this.qtd -= this.itens[itemCarrinho].qtd;
            this.valorTotal -= this.itens[itemCarrinho].precoUnt * this.itens[itemCarrinho].qtd;          

            this.itens.splice(index, 1);

            }
        }
    }
}


let carrinho = new Carrinho([ // criar a propriedade - parte 2
    {
        id:01,
        nome: "Camisa",
        qtd: 2,
        precoUnt:90
    },

    {
        id: 02,
        nome: "Calça",
        qtd: 5,
        precoUnt:150

    },
    {
        id: 03,
        nome: "Sapato",
        qnt:2,
        precoUnt: 150
    }
], 9,390 );

console.log(carrinho); // conferir se funciona (teste) parte 3

carrinho.addItem({id:01, nome:"Camisa", qtd:2, precoUnt:90}); // Adicionar item -  parte 5
console.log(carrinho); // conferir se funciona (teste) parte 6

carrinho.addItem({id:04, nome:"Boné", qtd:2, precoUnt:20}); // adicionando novo item - parte 7
console.log(carrinho);  // conferir se funciona (teste) parte 8

carrinho.removeItem({id:01, nome:"Camisa", qtd:1, precoUnt:90}); // removendo  item do carrinho - parte 9
console.log(carrinho);// conferir se funciona (teste) parte 10

