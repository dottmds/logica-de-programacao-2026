import leia from 'readline-sync'

var valentina = 150;
var crescimentoVa = 2;
var joaozinho = 140;
var crescimentoJo = 3;
var anos = 0;

while(valentina > joaozinho) {
    joaozinho += crescimentoJo;
    valentina += crescimentoVa;
    anos++; 
}

console.log("JOAOZINHO SERA MAIOR QUE VALENTINA DEPOIS DE " + anos + " ANOS")