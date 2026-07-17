import leia from 'readline-sync' 

var numero = leia.questionInt("INFORME O NUMERO EM DECIMAL: ")
var binario = "";

while(numero > 0) {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2);
}

console.log('Binario: ' + binario)