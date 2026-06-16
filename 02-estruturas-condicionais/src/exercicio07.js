import leia from 'readline-sync'

var salario = leia.questionFloat("Digite seu salario: ")
var valorEmpr = leia.questionInt("Digite o valor de emprestimo que vc quer: ")
var numPrest = leia.question("Digite o numero de prestacoes: ")

var valorPrestcao = valorEmpr / numPrest 

if(valorPrestcao <= salario * 0.30){
    console.log("emprestimo pode ser concedido")
} else{
    console.log("emprestimo na pode ser concedido")
} 