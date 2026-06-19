import leia from 'readline-sync'

var comp1 = leia.questionInt("Digite o comprimento do lado 1: ")
var comp2 = leia.questionInt("Digite o comprimento do lado 2: ")
var comp3 = leia.questionInt("Digite o comprimento do lado 3: ")

if(comp1 + comp2 > comp3 && comp1 + comp3 > comp2 && comp2 + comp3 > comp1) {
    console.log('Os lados podem formar um triangulo.')
    if(comp1 == comp2 && comp2 == comp3) {
    console.log("Triangulo equilátero")
} else if(comp1 == comp2 || comp2 == comp3 || comp2 == comp3) {
    console.log("Triangulo Isósceles")
} else {
    console.log("Triangulo Escaleno")
}

} else {
    console.log("OS LADOS NAO PODEM FORMAR UM TRIANGULO.")
}