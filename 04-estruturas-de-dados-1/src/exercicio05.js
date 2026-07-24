import leia from 'readline-sync';

export function exercicio05() {
    console.log("-------EXERCICIO 5-------")
    var numeros = [];

    console.log("===ESCREVA 10 NUMEROS===");

    for (var i = 0; i < 10; i++) {

        var num = leia.questionFloat("Digite " + i + " numero: ");
        numeros.push(num);

    }

    console.log(numeros);

    var numerosInvertidos = []
    for (var i = numeros.length - 1; i >= 0; i--) {

        numerosInvertidos.push(numeros[i])

    }
    console.log(numerosInvertidos)

    for (var i = 0; i < numeros.length; i++) {
        console.log("Posicao: " + i + "numeros" + numeros[i] + "Posicao: " + numeros.length - 1 - i + "Numeros invertidos: " + numerosInvertidos[i])
    }

}

exercicio05();