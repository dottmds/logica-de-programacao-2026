import leia from 'readline-sync'

var numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ")

do {
    console.log(numeroDigitado);
    numeroDigitado--;
} while (numeroDigitado >= 0)