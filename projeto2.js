const prompt = require ("prompt-sync")();
console.log (`selecione:
1. papel
2. pedra
3. tesoura`)
let opcao=+prompt ()

if (opcao ==1){player=1, opcao= "papel"} 
else if (opcao ==2){player= 2, opcao = "pedra"}
else if (opcao == 3){player = 3, opcao= "tesoura"};
console.log (opcao,"vs",resp)
if (player==3 && pc==1){pontos1++,i++}
else if (pc==3 && pc==1){pontos2++,i++}
else if (player<pc){pontos1++, i++}
else if(pc<player){pontos2++, i++}
else if (pc==player){i++}  
console.log("seus pontos=", pontos1)
console.log("meus pontos=", pontos2);  
  
if(pontos1>pontos2) {console.log("jogador venceu com", pontos1, "pontos!")} 
else if (pontos2>pontos1) {console.log("pc venceu com", pontos2, "pontos!")}
else{console.log("empate!")}
console.log("hahaha, isso foi divertido. Deseja jogar de novo?")
console.log(i)
repete= prompt ()
if (repete=="sim"){i=0}
else{console.log ("ok, até mais")}
 console.log (i,repete)