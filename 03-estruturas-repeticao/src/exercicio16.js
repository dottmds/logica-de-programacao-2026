import leia from 'readline-sync'

const QTD_ALUNOS = 3
const QTD_NOTAS = 3

var nomeMaiorMed
var maiorMed

for(var i = 0; i < QTD_ALUNOS; i++) {
    var nome = leia.question("INFORME O NOME DO ALUNO: ")
    
    var somaNotas = 0
    for(var j = 0; j < QTD_NOTAS; j++) {
        var nota = leia.questionFloat("INFORME A NOTA " + (j + 1));
        somaNotas += nota;
    }

    var media = somaNotas / QTD_NOTAS;

    if(i === 0) {
        nomeMaiorMed = nome;
        maiorMed = media;
    }

    if(media > maiorMed) {
        nomeMaiorMed = nome
        maiorMed = media
    }

    console.log("===============")
}