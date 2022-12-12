//videoGames.push('3DS');

//videoGames.pop();

for(numero = 0; numero <= 10; numero++){
  console.log(numero);
}

var i = 0;
while (i < 10){
  console.log(i);
  i++;
}

var videoGames = ['Switch', 'PS4', 'XBOX'];

for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4') {
    break;  
  }
} 

videoGames.forEach(function(item, index){
  console.log(item, index);
});

// exercicios

var ganhou = [1959, 1962, 1970,1994, 2002];
for(var i = 0; i< ganhou.length; i++){
  console.log(`O brasil ganou a copa de ${ganhou[i]}`);
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
for(var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}

var ultimaFruta = frutas[fruta.length - 1];
console.log(ultimaFruta);