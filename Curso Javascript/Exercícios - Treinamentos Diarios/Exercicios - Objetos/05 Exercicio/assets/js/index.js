//Sessão de exercicios de Orientação e objetos

// 05 - Crie uma classe conta no banco.
// Propriedade - Saldo conta corrente - saldo poupança e juros poupança
// Crie os metodos de deposito e saque
// Crie outro metodo para tranferencia poupança para C.corrente
// Crie uma conta especial, na qual os juros são o dobro da conta normal.

/**************************************************************************** */
// Criando a conta 01
class Conta { // cria class parte 1
    constructor(saldoCC, saldoCP, juros){ // propriedade dentro do constructor
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;

    }

/**************************************************************************** */
// Criandoo os métodos

    deposito(valor){  // criandoo o primeiro método(deposito/saque) parte 2
        this.saldoCC += valor;
    }

    saque(valor){  // criandoo o primeiro método(deposito/saque) parte 3
        this.saldoCC -= valor;

    }

    tranferenciaCP(valor){ // Criando metodo de tranferencias - parte 4
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    tranferenciaCC(valor){ // Criando metodo de tranferencias - parte 5
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosAniversario(){ // Criando metodo de tranferencias - parte 6
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

}

/**************************************************************************** */
// Criando a conta Especial
class ContaEspecial extends Conta { // criando a nova class da conta especial
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }

}


/**************************************************************************** */
// Estanciando a conta 01

let conta = new Conta(1000, 5000, 1);  // cria a variavel new Conta - parte 1.2
console.log(conta); // testar a class - parte 1.3

/**************************************************************************** */
// testando os métodos
conta.saque(500); // testar o metodo saque - parte 3
console.log(conta);

conta.deposito(5000); // testar o metodo deposito - parte 2
console.log(conta);

conta.tranferenciaCP(4000); // testar metodo de transferencia - parte 4
console.log(conta);

conta.jurosAniversario(); // testar metodo dos juros - parte 6
console.log(conta);

/**************************************************************************** */
// Estanciando a conta Especial

let conta2 = new ContaEspecial(10000, 50000,1)
console.log(conta2); // testando conta2

conta2.saque(2000); // testar o metodo saque - parte 3
console.log(conta2);

conta2.jurosAniversario(); // testar metodo dos juros - parte 6
console.log(conta2);

