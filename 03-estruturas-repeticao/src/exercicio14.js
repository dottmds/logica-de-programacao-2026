import leia from 'readline-sync' 

var numero = leia.questionInt("INFORME O NUMERO PARA O FATORIAL: ")
var resultadoFatorial = 1;
var contador = numero;

while(contador >= 1) {
    resultadoFatorial = resultadoFatorial * contador;

    contador--;
}

console.log("o fatorial de " + numero + " eh: " + resultadoFatorial);