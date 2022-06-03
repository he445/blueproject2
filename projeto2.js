console.clear();
const prompt = require("prompt-sync")();
let rodadas;
let player;
let pc;
let pontos1 = 0;
let pontos2 = 0;
let repete = "sim";
let opcaoArrey = ["papel", "pedra", "tesoura"];
for (let i = 0; i != rodadas; ) {
  if (repete == "sim") {
    i = 0;
    console.log("digite a quantidade de rodadas");
    rodadas = +prompt();
    while (i != rodadas) {
      let resp = Math.floor(3 * Math.random());
      if (resp == 1) {
        (pc = 1), (resp = opcaoArrey[0]);
      } else if (resp == 2) {
        (pc = 2), (resp = opcaoArrey[1]);
      } else if (resp == 0) {
        (pc = 3), (resp = opcaoArrey[2]);
      }
      console.log(`selecione:
1. papel
2. pedra
3. tesoura`);
      let opcao = +prompt();
      if (opcao > 3) {
        console.log("Ei, sem regras alternavas!"), (opcao = "mãozada de Deus");
      }
      if (opcao == 1) {
        (player = 1), (opcao = opcaoArrey[0]);
      } else if (opcao == 2) {
        (player = 2), (opcao = opcaoArrey[1]);
      } else if (opcao == 3) {
        (player = 3), (opcao = opcaoArrey[2]);
      }
      console.log("player", opcao, "vs", "pc", resp);
      if (player == 3 && pc == 1) {
        pontos1++, i++;
      } else if (pc == 3 && player == 1) {
        pontos2++, i++;
      } else if (player < pc) {
        pontos1++, i++;
      } else if (pc < player) {
        pontos2++, i++;
      } else if (pc == player) {
        i++;
      }
      console.log("seus pontos= ", pontos1);
      console.log("meus pontos= ", pontos2);
    }
    if (pontos1 > pontos2) {
      console.log("jogador venceu com", pontos1, "pontos!");
    } else if (pontos2 > pontos1) {
      console.log("pc venceu com", pontos2, "pontos!");
    } else {
      console.log("empate!");
    }
    console.log("hahaha, isso foi divertido. Deseja jogar de novo?");
    repete = prompt();
    if (repete == "sim") {
      (i = 0), (pontos1 = 0), (pontos2 = 0);
    } else {
      console.log("ok, até mais");
    }
  }
}
