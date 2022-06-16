// Sessão de exercicios de Orientação e objetos

/*01 - Crie uma classe que simula uma conta no banco.
* Utilize a forma que prefirir
* Deve conter a propriedade - saldo;
* E os metodos deposito e saque;
* Teste os métodos
*/

class conta {
   constructor(saldo) {
      this.saldo = saldo;
   }

   deposito(valor) {
      this.saldo += valor;
   }
}
   let conta = new conta(1000);

   conta.deposito(1000);

   console.log(conta.saldo);
