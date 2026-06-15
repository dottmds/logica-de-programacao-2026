import leia from 'readline-sync'

var nome = leia.question("Digite seu nome: ")
var salario = leia.questionFloat("Digite seu salario: ")
var dependentes = leia.questionInt("Digite a quantidade de dependentes: ")

if(dependentes === 0) {
    var salarioTotal = salario * 1.02
    console.log(nome + " seu salario final eh: R$" + salarioTotal.toFixed(2))
} else if(dependentes === 1) {
    var salarioTotal = salario * 1.05
    console.log(nome + " seu salario final eh: R$" + salarioTotal.toFixed(2))
} else if(dependentes === 2) {
    var salarioTotal = salario * 1.07
    console.log(nome + " seu salario final eh: R$" + salarioTotal.toFixed(2))
} else if(dependentes === 3) {
    var salarioTotal = salario * 1.10
    console.log(nome + " seu salario final eh: R$" + salarioTotal.toFixed(2))
} else if(dependentes === 4) {
    var salarioTotal = salario * 1.15
    console.log(nome + " seu salario final eh: R$" + salarioTotal.toFixed(2))
}