import leia from 'readline-sync'

var idade = leia.questionInt("Digite sua idade: ")
var salario = leia.questionFloat("Digite sru salario: R$: ")
var nomeLimpo = leia.keyInSelect(["SIM", "NAO"], "VOCE TEM NOME LIMPO: ")

var requisitosAtendidos = 0

if(idade > 18) {
    requisitosAtendidos++
}

if(salario >= 2500) {
    requisitosAtendidos++
}

if(nomeLimpo === 0) {
    requisitosAtendidos++
}

var result = requisitosAtendidos === 3 ? "Aprovado" : (requisitosAtendidos === 2) ? "Em analise" : "Reprovado"
console.log("EMPRESTIMO: " + result)