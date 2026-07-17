import leia from 'readline-sync'

var menorValor, maiorValor;

for(var contador = 1; contador <=15; contador++) {
    var numeroDigitado = leia.questionInt("DIGITE UM NUMERO " + contador + ": ");
}
    if(contador === 1) {
        menorValor = numeroDigitado;
        maiorValor = numeroDigitado;
    } else if(numeroDigitado > maiorValor) {
        maiorValor = numeroDigitado
    }


