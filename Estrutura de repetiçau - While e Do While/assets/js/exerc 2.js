//EXERCICIOS
//Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura
// de uma imagem(number).
//Retorne true se a imagem estiver em paisagem
/*
function ePaisagem(largura, altura){
   return largura > altura ? true : false;
}

console.log(ePaisagem (1080, 1920));
*/

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem (1920, 1080));