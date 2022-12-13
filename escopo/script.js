var carro = 'Fusca';

function mostrarCarro(){
  console.log(carro);
}

mostrarCarro();
console.log(carro);

//exemplo com let

if(true){
  let mes = 'Dezembro';
  console.log(mes);
}

for(let i = 0; i < 10; i++){
  console.log(`Número ${i}`);
}

//Exercícios

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


// R: por conta de  que no consoleetá tentando printar o var e não a variável declarada e também consst e let fora do escopo definido. Para corrigir colocamos o console dentro do escopo.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(10));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);