import leia from 'readline-sync'

console.log("======= DESARME A BOMBA =======");
console.log("UMA BOMBA FOI ENCONTRADA, VOCE CORTAR O FIO CERTO!");
console.log("VOCE PRECISA CORTAR O FIO CORRETO COM APENAS 3 TENTTIVAS!");
console.log("===============================");

var fios = ["Vermelho", "Azul", "Verde", "Amarelo", "Preto", "Branco", "Laranja", "Roxo", "Marrom", "Cinza"];

var fioCorreto = fios[Math.floor(Math.random() * fios.length)];
var tentativas = 3;
var desarmou = false;

do {
    var escolha = leia.keyInSelect(fios, `Escolha um fio para cortar, voce tem ${tentativas} tentativas`);
    var fioEscolhido = fios[escolha];
    
    if(fioEscolhido === fioCorreto){
        console.log("PARABENS, VOCE CORTOU O FIO CORRETO!!!");
        console.log("BOMB HAS BEEN DEFUSED");
        desarmou = true;
    } else {
        console.log("VOCE CORTOU O FIO " + fioEscolhido);
        console.log("ESSE NAO E O FIO CORRETO!!!");

        tentativas--;
        fios.splice(escolha, 1);
    }
    console.log("=========================");


} while (tentativas > 0 && desarmou === false) {
    console.log("KABOOOOOOOOOOOOOOOOOM, EXPLODIU!");
    console.log("O fio correto era o " + fioCorreto + "!!!!!");
};