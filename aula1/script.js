var frase= 'aqui contem uma string'

var frase2= 'aqui contem 1 número'

var idade= 24

var nome= 'Leonardo '
var sobrenome= 'Tozoni'
var nomeCompleto= nome + sobrenome //posso somar o nome e sobrenome assim, mas soma em string serve para concatenar as frases uma a frente da outra
var nomeCompleto = `${nome} ${sobrenome}`; //como também posso somar o nome e sobrenome assim
//console.log(typeof nomeCompleto)

var frase3= `It's time`

//----------------------------------------------------------------

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20
console.log(total)

// Crie duas expressões que retornem NaN
var nao = '28a'
console.log(typeof nao)

// Somar a string '200' com o número 50 e retornar 250
var num1 = '200'
var num2 = 50
var totalSoma = + num1 + num2
console.log(totalSoma) 

// Incremente o número 5 e retorne o seu valor incrementado
var inc = 5
console.log(++inc)

// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero / 2 + unidade; // '80kg'
console.log(peso)