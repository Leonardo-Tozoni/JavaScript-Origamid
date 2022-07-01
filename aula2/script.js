// estrutura de "switch"

var corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul': //para definir o conteúdo do case, usa-se "dois pontos"
    console.log('Olhe para o céu')
    break; //para a condição caso ela seja true e não permite passar para o próximo case ou para o default
  case 'Amarelo':
    console.log('Olhe para o sol')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
default: //condição que é aplicada CASO nenhum dos cases acima for true
  console.log('Feche os olhos')
}

//-------------------------------

//EXERCÍCIOS//

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var eu = 24
var ela = 18

if(eu > ela){
  console.log('É maior')
}
else if(eu === ela){
  console.log('É igual')
}
else{
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console? "Falso"
if(('Gato' === 'gato') && (5 > 2)) {
console.log('Verdadeiro');
} else {
console.log('Falso');
}

// O que irá aparecer no console? "Cão"
if(('Gato' === 'gato') || (5 > 2)) {
console.log('Gato' && 'Cão');
} else {
console.log('Falso');
}