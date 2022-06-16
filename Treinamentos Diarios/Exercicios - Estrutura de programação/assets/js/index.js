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


//Exercicios sobre Estrutura de Programação

// 01 - Armazene emvalores em variaveis cada um dos tipos de dados vistos.
// Strings  | Number | Boolean

let nome = "Cicera"; // String
let idade = 35;      // Number
let rg    = true     // Boolean

// Mostrando o tipo
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof rg);

// Mostrando os dados
console.log(nome);
console.log(idade);
console.log(rg);

/******************************************************** */
/** 02 Criar ums estrutura if que mostre a entrda na balada, se
 *  tiver mais de 18 anos, pode entrar.
 *  Armazenar a variavel com let
 *  Inserir uma instrução console.log("pode entrar"), sendo maior de 18.
 * 
 * */ 

let entradaBalada = 35;
//let entradaBalada = 15; não pode entrar

if (entradaBalada >= 18) {
    console.log("Pode entrar!");

} else {
    console.log("Não pode entrar");
}

/******************************************************** */
/** 03 Crie um constante com seu nome como valor
 *  Depois uma estrutura de if que verifica se o seu nome
 *  que esta na constante
 *  se estiver, emita uma saldação com console.lo.
 * 
 * */ 

const meuNome = 'Cícera';

if (meuNome == 'Cícera'){
    console.log(` Olá ${meuNome}, tudoo bem?`);
}

/******************************************************** */
/** 04 A função Math.pow() exibe a potencia de um numero;
 *  teste a função com console.log() e as seguntesn bases: 2,3,18
 *  o espoente deve ser 2
 *  Recebe dois arguemnto base e expoente
 * ex. math.pow(5,3)
 * */ 

const num = 18;

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

/******************************************************** */
/** 05 Armazene a velocidade de um carro em uma variavel. com um numero.
 *  Faça uma estrutura if/ else que verifica se a velocidade esta acima
 *  da velocidade
 *  80 é a velocidade maxima
 *  Se estiver acima ou abaixo exiba a msg no console.lo
 * */ 


let velocidadeCarro = 80;

if(velocidadeCarro > 80){
    console.log("Levou multa!");
} else{
    console.log("Não levou multa");
}

/******************************************************** */
/** 06 Faça uma estrutura if/else para verificar se um usuario pode dirigir
 *   Armazena as variaveis usuario; idade e cnh;
 *  Se a idade maior que 18 e não possui CNH; exiba a msg
 *  Se for maior de 18 e tem CNH, exiba a msg
 *  Se não tiver 18, nem cnh, exiba outra msg
 * */ 

let maiorIdade = 19; //17 anos menor
let cnh = true; // false - não tem CNH

if(maiorIdade >= 18 && cnh){
    console.log("Sim! Você pode dirigir");

} else if(maiorIdade >= 18 && cnh == false){
    console.log("Não! Você não pode dirigir, mas ja pode fazer a CNH");

} else{
    console.log("Não! Você não pode dirigir");
}


/******************************************************** */
/** 07 Escreva um loop while que exibe numeros de 0 a 10 no console.
 * */ 

let i = 0;

while(i <= 10) {
    console.log(i);

    i++;
}

/******************************************************** */
/** 08 Escreva um loop com for que exibe numeros de 100 a 50 no console.
 * Decremento*/ 

for( let i = 100; i >= 50; i--){
    console.log(i);
}


/******************************************************** */
/** 09 Escreva um loop com for ou while que exibe numeros de 0 a 50 no console.
 *exiba qual é par e qual é impar
 * */ 

 for(let i = 0; i <= 50; i++) {
    if(i % 2 == 0){
        console.log(`o numero ${i} é par`);
    }else{
        console.log(`o numero ${i} é impar`);
    }
 }

 /******************************************************** */
/** 10 Verifique se um numero é primo .
 * Numero primo, é um numero natural, maior que 1 e apenas
 * divisivel por ele mesmo
 * */

let numeroPrimo = 5;
let divisoes = 0;

for( let i = 1; i <= numeroPrimo; i++) {

    if (numeroPrimo % i == 0) {
        divisoes++;
    }
}

    if(divisoes == 2) {
    console.log(`O numero ${numeroPrimo} é primo.`);

    }else {
    console.log(`O numero ${numeroPrimo} não é primo.`);
}