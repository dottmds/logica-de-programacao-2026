import leia from 'readline-sync'

console.log("-----PROJETO DOACAO | CRIANCA ESPERANCA-----")
var valor = leia.keyInSelect(["R$10" , "R$25" , "R$50" , "OUTRO VALOR"] , "QUANTO DESEJA DOAR?")

if(valor === 0){
    console.log("Voce doou R$10, muito obrigado pela doacao!")
} else if(valor === 1){
    console.log("Voce doou R$25 muito obrigado pela doacao!")
} else if(valor === 2){
    console.log("Voce doou R$50 muito obrigado pela doacao!")
} else if(valor >= 3){
    var outr = leia.questionFloat("Quanto vc deseja doar?: ")
    console.log("Voce doou R$" + outr + ", obrigado pela doacao!")
}