/**OPERADORES DE COMPARAÇÃO
 * 
 * Tambem conhecidos xomo Operadores relacopnais
 * Servem para formar as expreções condicionais para o comando if.
 * 
 * Operadores
 * 
 * Igual(==) - Verifica se os valores comparados são iguais.
 * Idêntico (===) - Verifica se os valores comparados são iguais e do mesmo tipo.
 * Diferente (!=) - Verifica se os valores comparados são difeerentes.
 * Não idênticos (!==) - Verifica se os valores são diferentes e tipos diferentes.
 * Menor (<) - Verifica se o valor da esquerda é menor que o valor da direita.
 * Maior (>) - Verifica se o valor da esquerda é maior que o valor da direita.
 * Menor igual (<) - Verifica se o valor da esquerda é menor ou igual que o valor da direita.
 * Maior igual (>) - Verifica se o valor da esquerda é maior ou igual que o valor da direita
 */

/**Operadores Logicos
 * O que são operadores lógicos?
 * 
 * Operadores
 * 
 * E (&&) - Verdadeiro se todas as expressões forem verdadeiras.
 * OU (II) - Verdadeiro se pelo menos uma das expressões for verdadeira.
 * Negação (!) - Inverte o resultado da expressão de comparação.
 */


/**
 * 1) Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
    usuário. Considere os seguintes critérios:
    Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
    Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
    Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
    Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
    Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
    para o usuário. 
 */


var idade = prompt('Infome sua idade')

   if( idade >= 0 && idade < 15){
      alert('Criança');
 }

   if( idade >= 15 && idade < 30){
      alert('Jovem');
}

   if( idade >= 30 && idade < 60){
      alert('adulto');
}

   if( idade >= 60){
      alert('Idoso');
}

//Utilizando cadeamento

var idade = prompt('Infome sua idade')

   if( idade >= 0 && idade < 15){
      alert('Criança');


   } else if( idade >= 15 && idade < 30){
      alert('Jovem');


   } else if( idade >= 30 && idade < 60){
      alert('Adulto');

   } else{
      alert('Idoso');

}




