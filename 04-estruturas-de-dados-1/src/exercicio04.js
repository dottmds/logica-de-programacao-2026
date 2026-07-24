import leia from 'readline-sync';

export function exercicio04() {
    console.log("-------EXERCICIO 4-------")
    var pares = []

    for (var i = 1; i <= 15; i++) {
        var num = leia.questionInt("Digite o " + i + "° numero: ")
        if (num % 2 === 0 || num > 10) {
            pares.push(num)
        }
    }

    console.log(`Numeros pares ou maiores que 15: ${pares}`)
}

exercicio04();