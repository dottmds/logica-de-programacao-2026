import leia from 'readline-sync'

var timeA = leia.questionInt("Digite a quantidade de gols do time A: ");
var timeB = leia.questionInt("Digite a quantidade de gols do time B: ");

var totGols = timeA - timeB;

if(totGols === 0){
    console.log("EMPATE!!!!!!!!")
} else if(totGols === 1 || totGols === 2 || totGols === 3){
    console.log("FOI UMA PARTIDA NORMAL")
} else{
    console.log("GOLEAAAAAAAAAADA!")
}

