import leia, { question } from 'readline-sync'

const QTD_PESSOAS = 5
var contador = 1
var menorAltura = 0
var maiorAltura = 0
var quantidadeHomens = 0
var quantidadeMulheres = 0
var somaAlturas = 0
var somaAlturaMulheres = 0

while(contador < QTD_PESSOAS) {
    console.log("==== pessoa " + contador + " ====")
    var altura = leia.questionFloat("Digite sua altura: ");

    var genero = leia.keyInSelect(["MASCULINO", "FEMININO"], "INFORME O GENERO!!!")

    if(contador === 1) {
        maiorAltura = altura;
        menorAltura = altura;
    }

    if(altura < menorAltura) {
        menorAltura = altura;
    }

    if(altura > maiorAltura) {
        maiorAltura = altura;
    }

    if(genero === 0) {
        quantidadeHomens++
    } else {
        quantidadeMulheres++
        somaAlturaMulheres += altura
    }
    somaAlturas += altura;
    contador++;
}

console.log("===== resultados =====");
console.log("maior altura: " + maiorAltura);
console.log("menor altura: " + menorAltura);
console.log("media altura mulheres " + (somaAlturaMulheres / quantidadeMulheres).toFixed(2));
console.log("media altura populacao: " + (somaAlturas / QTD_PESSOAS).toFixed(2));
console.log("percentual homens: " + ((quantidadeHomens / QTD_PESSOAS) * 100).toFixed(2) + "%");