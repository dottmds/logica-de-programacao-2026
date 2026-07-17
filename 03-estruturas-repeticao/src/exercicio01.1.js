import leia from 'readline-sync'

var numero = leia.questionInt("DIGITE UM NUMERO: ");
var contador = 0;

//enquanto + while
while(contador <= numero) {
    console.log(contador);
    contador++
}