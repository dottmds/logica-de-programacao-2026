import leia from 'readline-sync'

export function exercicio02() {
    console.log("-------EXERCICIO 2-------")
    var numeros = []
    var soma = 0

    console.log("Digite 5 numeros")

    for (var i = 1; i <= 5; i++) {
        var num = leia.questionFloat(`Digite o ${i}° numero: `)
        numeros.push(num)
        soma += num

    }

    console.log("\n===RESULTADOS===")
    console.log(`Somatorio: ${soma}`)





}

exercicio02();