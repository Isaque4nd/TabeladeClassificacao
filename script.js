var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var isaque = { nome: "Isaque", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui, isaque];

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);
isaque.pontos = calculaPontos(isaque);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='limpar(" + i + ")'>Limpar</button></td>";
    elemento +=
      "<td><button onClick='remover(" + i + ")'>Remover Jogador</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  for (var ganhador = 0; ganhador < jogadores.length; ganhador++) {
    if (jogadores[ganhador] != jogador) {
      jogadores[ganhador].derrotas++;
      jogadores[ganhador].pontos = calculaPontos(jogadores[ganhador]);
    }
  }
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  for (var empatou = 0; empatou < jogadores.length; empatou++) {
    if (jogadores[empatou] != jogador) {
      jogadores[empatou].empates++;
      jogadores[empatou].pontos = calculaPontos(jogadores[empatou]);
    }
  }
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function limpar(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}

function remover(i) {
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var adicionar = document.getElementById("jogadorNovo").value;
  document.getElementById("jogadorNovo").value = "";
  var objetoJogador = {
    nome: adicionar,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(objetoJogador);
  exibeJogadoresNaTela(jogadores);
}
