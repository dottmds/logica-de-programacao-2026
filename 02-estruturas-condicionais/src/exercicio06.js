import leia from 'readline-sync'

var prod = leia.question("digite o nome do produto: ")
var valor = leia.questionFloat("digite o valor do produto: ")

var oneReal = leia.questionFloat("quantia de moedas de 1 real: ") * 1.00
var cinqCent = leia.questionFloat("quantia de moedas de 50 centavos: ") * 0.50
var vintCincCent = leia.questionFloat("quantia de moedas de 25 centavos: ") * 0.25
var dezCent = leia.questionFloat("quantia de moedas de 10 centvos: ") * 0.10
var CincCent = leia.questionFloat("quantia de moedas de 5 centavos: ") * 0.05

var total = oneReal + cinqCent + vintCincCent + dezCent + CincCent 

if(total > valor) {
    console.log("com um total de R$" + total + " vc conseguira comprar o produto " + prod)
} else if(total < valor) {
    console.log("com um total de R$" + total + " vc nn conseguira comprar o produto " + prod)
}