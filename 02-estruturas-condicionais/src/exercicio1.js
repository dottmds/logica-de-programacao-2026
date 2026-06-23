import leia from 'readline-sync'

var nota1 = leia.questionFloat("DIGITE A PRIMEIRA NOTA DO ALUNO: ");
var nota2 = leia.questionFloat("DIGITE A SEGUNDA NOTA DO ALUNO: ");
var nota3 = leia.questionFloat("DIGITE A TERCEIRA NOTA DO ALUNO: ");
var nota4 = leia.questionFloat("DIGITE A QUARTA NOTA DO ALUNO: ");
var nota5 = leia.questionFloat("DIGITE A QUINTA NOTA DO ALUNO: ");
var fre = leia.questionFloat("DIGITE A FREQUENCIA DO ALUNO DO ALUNO: ");
// OU:  var QntidadeDeDiasPresentes = leia.questionInt("Digite a quantidade de dias presentes: ")
//      var freq = (QntidadeDeDiasPresentes / 200) * 100
var total = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if(total >= 7 && fre > 75) {
    console.log("O ALUNO ESTA APROVADO!!!");
} else if(total < 7 || fre < 75) {
    console.log("O ALUNO ESTA REPROVADO!!!")
} 

// OU:  var resultado = (media > 7 && fre > 75) ? "APROVADO" : "REPROVADO"
//      console.log(resultado)