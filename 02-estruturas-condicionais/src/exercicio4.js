import leia from 'readline-sync'

var comp1 = leia.questionFloat("Digite o comprimento do lado 1: ")
var comp2 = leia.questionFloat("Digite o comprimento do lado 2: ")
var comp3 = leia.questionFloat("Digite o comprimento do lado 3: ")

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


// OU:  var ladoA = leia.questionFloat("Digite o comprimento do lado 1: ")
//      var ladoB = leia.questionFloat("Digite o comprimento do lado 2: ")
//      var ladoC = leia.questionFloat("Digite o comprimento do lado 3: ")
//      
//      var formaTriangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA
//      
//      if(formaTriangulo === false) {
//          console.log("NAO EH POSSIVEL FORMAR UM TRIANGULO")
//      } else if(ladoA === ladoB && ladoB === ladoC) {
//          console.log("EH UM TRIANGULO EQUILATERO")
//      } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//          console.log("EH UM TRIANGULO ESCALENO")
//      }