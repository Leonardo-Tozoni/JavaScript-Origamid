var pessoa = {
  nome: 'Leonardo', //para definir vários objetos dentro de um parâmetro, separamos por vírgula dentro de {} após '='
  idade: 24, //podemos passar qualquer tipo de dado, inclusive variáveis dentro de um objeto.
  profissão: 'Futuro programador',
}

//var quadrado = {
//  lados: 4,
//  area: function(lado) { //método não simplificado de se abrir uma função, usando a palavra reservada "function"
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
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// tudo o que vem antes do ponto, é um objeto, depois do ponto vem o método, podendo ser uma função ou não, exemplo: console.log
// console = Objeto
// log = método (tudo o que eu colocar aqui, será mostrado no browser).

