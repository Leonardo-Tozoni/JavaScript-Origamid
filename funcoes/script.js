function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(10));

// função de pi

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

// função de imc
function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(95, 1.7))

// cor favorita

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto de Azul'
  }
  else if (cor === 'verde') {
    return 'Eu gosto de Verde'
  }
  else{
    return 'Eu não tenho cor favorita'
  }
}

corFavorita()

addEventListener('click', function(){console.log('oi')}); //função fantasma

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  }
  else if (idade >= 60){
    return true;
  }
  else {
    return false;
  }
}

console.log(terceiraIdade(60));

//EXERCICIO

// Crie uma função para verificar se um valor é Truthy

function isTruthy(dados) {
  return !!dados;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lados) {
  return lados * 4
}

console.log(perimetro(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome}, ${sobrenome}`;
}

// Crie uma função que verifica se um número é par

function validacao(numero) {
  if ((numero % 2) === 0) {
    return true;
  }
  else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(tipo) {
  return typeof tipo
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function mostraNome(){console.log('Leonardo Tozoni')});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);