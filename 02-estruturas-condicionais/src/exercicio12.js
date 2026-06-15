import leia from 'readline-sync'

var idade = leia.questionInt("Digite sua idade: ")

if(idade >= 18){
    console.log("Digite seu nome completo: ")
} else if(idade < 18){
    leia.question("Permissao dos pais: ")
    leia.question("Digite seu nome completo: ")
} 