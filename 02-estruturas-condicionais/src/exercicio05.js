import leia from 'readline-sync'

// NOMES E VALORES
var cliente1 = leia.question("Digite o nome do primeiro cliente: ");
var valorCli1 = leia.questionFloat("Digite o valor que " + cliente1 + " pagou: ");

var cliente2 = leia.question("Digite o nome do segundo cliente: ");
var valorCli2 = leia.questionFloat("Digite o valor que " + cliente2 + " pagou: ");

// VALOR PAGO PELOS 2 JUNTOS
var total = valorCli1 + valorCli2
console.log("Valor total gasto dois juntos: " + total.toFixed(2))

// VALOR MEDIO
var valorMedio = total / 2 
console.log("valor medio: " + valorMedio)

// SE
if(valorCli1 > 20) {
    console.log(cliente1)
}

if(valorCli2 > 20) {
    console.log(cliente2)
}