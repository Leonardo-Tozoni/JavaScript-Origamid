var idade = 20;
var naoPossuiDiabetes= false;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = false;
if(possuiFaculdade == true)
  console.log('Sim, possui');
else
  console.log('Não Possui');

  //exercícios

  var scroll = 1000;
  scroll += 500;

  console.log(scroll);

  var possuiCarro = true;
  var possuiCasa = true;
  var darCredito;

  darCredito = (possuiCarro && possuiCasa) ? 'Crédito concedido' : 'Crédito Negado'; 
  console.log(darCredito);