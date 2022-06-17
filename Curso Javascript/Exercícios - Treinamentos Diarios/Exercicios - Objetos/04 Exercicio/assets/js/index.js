//Sessão de exercicios de Orientação e objetos

// 04 - Crie uma classe que simule um carro.
// Possuir as propriedade: marca, cor, combustivelRestante;
// Crie um médoto de dirigir, no qual o combustivel,
// vá diminuindo gradativamente
// e outro metodo para abastecer, quando necessário;
class Carro { // cria class - parte 1
    constructor(marca, cor, combustivelRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.combustivelRestante = combustivelRestante;
        this.consumo = consumo;
    }

    dirigir(Km){  // cria o primeiro metodo - parte 4

        let litrosConsumidos = Km / this.consumo;

        this.combustivelRestante -= litrosConsumidos;
    }
    abastecer(l) { // cria o segundo metodo - parte 7
        this.combustivelRestante += l;

    }

}




let carro = new Carro("Chevrolet", "preta", "100", 14); // finaliza class - parte 2
console.log(carro); // testar - parte 3


carro.dirigir(100); // chama o metodo dirigir e adiciona o km rodado - parte 5
console.log(carro); // testar o metodo - parte 6

carro.abastecer(10); // chama o meetodo abastecer e adicona o litro - parte 8
console.log(carro);  // testar o metodo - parte 9


