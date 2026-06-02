import leia from 'readline-sync';

/*
var idade1 = "28"      

var idade2 = 28;
// == verifica apenas o valor   e === verifica tipo e valor
if(idade1 == idade2){
    console.log("Sao iguais (==)")
}

if (idade1 === idade2) {
    console.log("Sao iguais (===)")
} 
*/

var nota1, nota2, nota3;

nota1 = leia.questionFloat("Digite a preimeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")

var soma = nota1 + nota2 + nota3;

var media = soma / 3

console.log("a media e: " + media.toFixed(2))