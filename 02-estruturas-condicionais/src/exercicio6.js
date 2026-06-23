import leia from 'readline-sync'

var numeroUm = leia.questionFloat("Digite o primeiro numero: ")
var numeroDois = leia.questionFloat("Digite o segundo numero: ")
var operacao = leia.keyInSelect(["+", "-", "X", "/", "%"], "SEECIONE A OPERACAO")

switch(operacao) {
    case 0:
        var result = numeroUm + numeroDois
        console.log(result)
        break;
    case 1:
        var result = numeroUm - numeroDois
        console.log(result)
        break;
    case 2:
        var result = numeroUm * numeroDois
        console.log(result)
        break;
        case 3:
            if(numeroDois === 0) {
                console.log("nao eh possivel dividir por 0")
                break;
            }
            var result = numeroUm / numeroDois
            console.log(result)
    case 4: if(numeroDois === 0) {
        console.log("nao eh possivel dividir por 0")
        break;
    }
    var result = numeroUm % numeroDois
    console.log(result);
    break;
}