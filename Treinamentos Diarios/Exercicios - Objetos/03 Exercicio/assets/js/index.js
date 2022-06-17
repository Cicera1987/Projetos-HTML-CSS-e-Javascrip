//Sessão de exercicios de Orientação e objetos

// 03 - Crie um objeto que simule um endereço de um cliente
// Propriedades; Rua, Bairro, Cidade e Estado;
// No constructor o endereçpo ja deve ser definido por completo;
// Crei metodos para atualizar todas as propriedade;
// Teste os métodos

class Endereco {
    constructor(rua,numero, bairro, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;

    }

    set novaRua(novaRua){ // alterando propriedade com - set -
        this.rua = novaRua;
    }
    set novoNumero(novoNumero){ // alterando propriedade com - set -
        this.numero = novoNumero;
    }

    set novoBairro(novoBairro){ // alterando propriedade com - set -
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){ // alterando propriedade com - set -
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){ // alterando propriedade com - set -
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Rua 21 de Maio","527", "Igra Norte","Torres", "RS");
console.log(endereco);

endereco.novaRua = "Rua 15 de Setembro";
endereco.novoNumero = 200;
endereco.novoBairro = "Centro";
endereco.novaCidade = "Passo de Torres";
endereco.novoEstado = "SC";

