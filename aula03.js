import leia from 'readline-sync';

var idade

idade = leia.questionFloat("Digite sua idade: ")

var quantidadeDeMeses = idade * 12 
console.log("quantidade de meses q vc tem e: " + quantidadeDeMeses)

var idadeEmDias = idade * 365;
console.log("SA IDADE EM DIAS E " + idadeEmDias)