import leia from 'readline-sync';


export function exercicio01() {
    console.log("-------EXERCICIO 1-------")

    var numeros = []
    var numerosMultiplicados = []
    console.log("Digite 10 numeros")

    for (let i = 0; i < 10; i++) {
        let num = leia.questionFloat(`Digite o ${i + 1}° numero: `)

        numeros.push(num)
        numerosMultiplicados.push(num * 5)
    }

    console.log("\nVetor original", numeros)
    console.log("Vetor multiplicado por 5: ", numerosMultiplicados)

}

exercicio01();