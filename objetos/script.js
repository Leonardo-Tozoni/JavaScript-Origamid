var pessoa = {
  nome: 'Leonardo', //para definir vários objetos dentro de um parâmetro, separamos por vírgula dentro de {} após '='
  idade: 24, //podemos passar qualquer tipo de dado, inclusive variáveis dentro de um objeto.
  profissão: 'Futuro programador',
}

//var quadrado = {
//  lados: 4,
//  area: function(lado) { método não simplificado de se abrir uma função, usando a palavra reservada "function"
//    return lado * lado;
//  },
//  perimetro: function(lado) {
//    return this.lados * lado;
//  }
//}

var quadrado = {
  lados: 4,
  area(lado) { //a partir do ES6, é possível apenas informar a palavra definida para aquela função sem a necessidade de inserir "function" para se definir uma função.
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado; //this faz referencia ao próprio objeto
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// tudo o que vem antes do ponto, é um objeto, depois do ponto vem o método, podendo ser uma função ou não, exemplo: console.log
// console = Objeto
// log = método (tudo o que eu colocar aqui, será mostrado no browser).

//EXERCICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Leonardo',
  sobrenome: 'Tozoni',
  idade: 23,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa){
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}