import leia from 'readline-sync'

var temperatura = leia.questionFloat("Digite a temperatura atual da máquina: ")

if(temperatura < 50) {
    console.log("Resfriamento Crítico.")
} else if(temperatura >= 50 && temperatura <= 89) {
    console.log("Normal.")
} else if(temperatura >= 90 && temperatura <= 110) {
    console.log("Atenção.")
} else if(temperatura > 110) {
    console.log("Superaquecimento.")
}