import leia from 'readline-sync'

var opcoes = ["PEDRA", "PAPEL", "TESOURA"]

var escolhaComputador = Math.floor(Math.random() * 3);
var escolhaDoUsuario = leia.keyInSelect(opcoes, "escolha sua opcao:");

if(escolhaDoUsuario === -1) {
    console.log("OPCAO INVALIDA, JOGO CANCELADO");
} else {
    console.log("voce escolheu: " + opcoes[escolhaDoUsuario]);
    console.log("o computador escolheu: " + opcoes[escolhaComputador])

    if(escolhaComputador === escolhaDoUsuario)
        console.log("empatou hahahhhhaaaahahaaxx")

} if (
    escolhaDoUsuario === 0 && escolhaComputador === 2 ||
    escolhaDoUsuario === 1 && escolhaComputador === 0 ||
    escolhaDoUsuario === 2 && escolhaComputador === 1 
){
    console.log("USUARIO GANHOU")
}else {
    console.log("COMPUTADOR GANNHOU")
}
