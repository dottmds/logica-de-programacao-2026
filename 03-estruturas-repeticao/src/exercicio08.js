import leia from 'readline-sync'

// 8) Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos e mostre a
//    soma dos números ímpares e o produto (multiplicação) dos números pares. 

var somaNPares = 0;
var somaNImpares = 0;
var repeticoes = 1


while(repeticoes <= 6) {
    var numero = leia.questionInt("DIGITE O " + repeticoes + "° NUMERO: ") 
    
    if(numero % 2 === 0) {
        somaNPares = numero + somaNPares
    } else {
        somaNImpares = numero + somaNImpares
    }

    repeticoes++
}

console.log("SOMA DOS NUMEROS IMPARES: " + somaNImpares)
console.log("PRODUTO DOS NUMEROS PARES: " + somaNPares * numero)