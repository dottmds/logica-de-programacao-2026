import leia from 'readline-sync'

// NOMES
var cliente1 = leia.question("nome do primeiro cliente: ")
var cliente2 = leia.question("qual o nome do segundo cliente: ")

// VALOR PAGO POR CADA
var valorCli1 = leia.questionFloat("qual o valor que " + cliente1 + " pagou?: ")
var valorCli2 = leia.questionFloat("qual o valor que " + cliente2 + " pagou?: ")

// VALOR PAGO PELOS 2 JUNTOS
var total = valorCli1 + valorCli2

// VALOR MEDIO
var valorMedio = (valorCli1 + valorCli2) / 2 

// SE
if(valorCli1 > 20 || valorCli2 > 20) {
    console.log("pegou acima de R$20")
    console.log("valor medio: " + valorMedio)
    console.log("valor dos dois juntos: " + total)
} else {

console.log("valor medio: " + valorMedio)
console.log("valor dos dois juntos: " + total)
}