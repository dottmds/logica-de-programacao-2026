import leia from 'readline-sync'

var modo = leia.keyInSelect(["PvE", "PvP"], "ESCOLHA O MODO DE JOGO");
var numeroMagico;

if(modo === 1) {
    numeroMagico = leia.question("INFORME O NUMERO MAGICO: ");
    console.clear();

} else {
    var dificuldade = leia.keyInSelect(["FACIL", "MEDIA", "DIFICIL"], "SELECIONE A DIFICULDADE:");

    var limite = dificuldade === 0 ? 100 : dificuldade === 2 ? 100000 : 1000000;

    numeroMagico = Math.floor(Math.random() * limite);
    console.log("O NUMERO MAGICO ESTA ENTRE 1 E " + limite);
}

var chute;
var tentativas = 0;

do {
    chute = leia.questionInt("CHUTE O NUMERO MAGICO: ");
    if(chute > numeroMagico) {
        console.log("numero magico eh menor");
    } else if(chute < numeroMagico) {
        console.log("numero magico eh maior");
    }
    tentativas++;
} while(chute !== numeroMagico);

console.log("voce acertou!!!")
console.log('voce levou ' + tentativas + " tentativas!!!!!!!")