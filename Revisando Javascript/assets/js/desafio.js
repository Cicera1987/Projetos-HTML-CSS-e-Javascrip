
var a = 10
var b = 20
var c = null // variavel C é uma auxiliar na logica

document.write('A:' + a + '<br/>')
document.write('B:' + b + '<br/>')
document.write('C:' + c + '<br/>')

document.write('<hr />')

//Lógica de inversão dos valores de A e B.

//lógica de inversão dos valores das variáveis A e B
var c = a //utilizada a variável C para armazenar temporariamente o valor da variável A
var a = b //sobrepõe o valor da variável A com o valor da variável B
var b = c //sobrepóe o valor da variável B com o valor da variável C (C nesse momento contém o valor da variável A)
var c = null //opcional: remove o valor contido na variável C

document.write('A:' + a + '<br/>')
document.write('B:' + b + '<br/>')
document.write('C:' + c + '<br/>')


