//Exercicios de Funções

//01 - Escreva uma função que imprima "Hello Word" no sonsole.

function imprimirNoConsole(){
    console.log('Hello Word');

}

imprimirNoConsole();


/********************************************************** */
//02 - Escreva uma função que recebe um parâmetro de idade.
// E imprima esta mensagem no console.
// com template literals dizendo "Você tem  x anos"

function imprimeIdade(idade){
    console.log(`Voce tem ${idade}, anos`);
    
}
imprimeIdade(35)
imprimeIdade(15)
imprimeIdade(25)

/********************************************************** */
//02.1 - Escreva uma função que recebe dois parâmetro de idade.
// E imprima esta mensagem no console.
// com template literals dizendo "Você tem  x anos"

function imprimidados(nome, idade){
console.log(` ${nome}, você tem ${idade}, anos`);

}
imprimidados('Cicera', 35)
imprimidados('João', 30)
imprimidados('Pedro', 20)


/********************************************************** */
//03 - Escreva uma função que some dois numeros
// imprima este retorno no console

function soma(x, y){
    return x + y;
  
}
console.log(soma(5,6));
console.log(soma(10,6));
console.log(soma(15,11));

/********************************************************** */
//04 - Escreva uma função que retorne um numero aleatório
// O numero maximo deve ser passo via parametro;
// Utizando Math.random()

function numeroAleatorio(num){
    return Math.floor(Math.random() * num) +1;

}
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(50));


/********************************************************** */
// 05 - Escreeva uma função que recebe a idade de uma pessoa;
// Se é maior de idade (18), ela pode entra na auto escola, Imprima
//uma mensagem informando isso.
// Se ela é menor de idade, ela não pode entra na auto escola.
// Imprima outra mensagem com este aviso.
//execute a função nos dois casos

function autoEscola(idade){

    if(idade >= 18){
        console.log('Você ja pode se matricular na auto escola.');

    }else{
        console.log('Você ainda não pode se matricular na auto escola.');
    }
  
}
autoEscola(19);
autoEscola(15);
autoEscola(21);
autoEscola(12);

/********************************************************** */
// 06 - Escreva uma função que detecta o tipo de dado passado.
// Verifique se é um number, boolean ou string
// E retorne uma mensagem para cada tipo 
// Execute uma função para cada tipo

function verificaTipoDeDado(dado) {

    if (typeof dado === 'string') {
        console.log("Este dado é uma string.");

    } else if (typeof dado === 'number'){
        console.log("Este dado é um number.");

    } else if (typeof dado === 'boolean') {
        console.log("Este dado é um boolean.");
    }
}
verificaTipoDeDado("teste");
verificaTipoDeDado(50);
verificaTipoDeDado(true);

/********************************************************** */
// 07 - Escreva uma função que receb um numero negativo
// e retorne um numero positivo.
// Dica: Utilize a função Math.ads - esta bibliotema transforma um numero negativo em absuloto ou positivo.

function numeroPositivo(numNegatico){
    return Math.abs(numNegatico);

}
console.log(numeroPositivo(-13));
console.log(numeroPositivo(6));
console.log(numeroPositivo(-34.4));

/********************************************************** */
// 08 - Escreva uma função que receba string.
// Se o texto conter mais de 10 caracteres imprima " texto muito logo"
// Se conter menos, imprima "texto dentro do limite"

function checarTamanhoTexto(texto) {

    if ( texto.length > 10 ) {
        console.log('Texto muito longo.');
    }else {
        console.log('texto dentro do limite');
    }
}
checarTamanhoTexto("texto");
checarTamanhoTexto("Vamos checar se funciona");
checarTamanhoTexto("texto 10");

/********************************************************** */
// 09 - Escreva uma função que receba dois numeros, base e potencia
// Depois faça a operação e retorne o resultado
// Exemplo : 3,2 = 9

function basePotencia(b,p){
    return Math.pow(b,p);
   // return b ** p;  ------->Pode ser feito das duas formas.
       
}
console.log(basePotencia(2,2));
console.log(basePotencia(3,2));
console.log(basePotencia(4,2));

/********************************************************** */
// 10 - Escreva uma função que receba um número, e o decremento de 1 em 01 com um loop.
// Alem disso imprima só os numeros pares

function ImprimirPar(num){
    for(i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
ImprimirPar(12);
ImprimirPar(24);
ImprimirPar(100);
