import leia from 'readline-sync'

var ultimoDigito = leia.question("digite o ultimo digito da placa do seu veiculo: ")

if(ultimoDigito === "0" ||ultimoDigito === "1") {
    console.log("vc nn pode rodar na segunda feira")
} else if(ultimoDigito === "2" || ultimoDigito === "3") {
    console.log("vc nn pode rodar na terca")
} else if(ultimoDigito === "4" || ultimoDigito === "5") {
    console.log("vc nn pode rodar na quarta")
} else if(ultimoDigito === "6" || ultimoDigito === "7") {
    console.log("vc nn pode rodar na quinta")
} else {
    console.log("vc nn pode rodar na sexta feira")
}
 
switch(ultimoDigito) {
    case "0":
    case "1":
        console.log("vc nn pode rodar na segunda");
        break;
    case "2":
    case "3":
        console.log("vc nn pode rodar na terca");
        break;
    case "4":
    case "5":
        console.log("vc nn pode rodar na quarta");
        break;
    case "6":
    case "7":
        console.log("vc nn pode rodar na quinta");
        break;
    case "8":
    case "9":
        console.log("vc nn pode rodar na sexta");
        break;
    default:
        console.log("CARACTER INVALIDO")
}



// operdor ternario, mais facil 
// var mensagem = ultimoDigito === "0" || ultimoDigito === "1" ? "n pdd roda na seg" : ultimoDigito === "0" || ultimoDigito === "1" ? "n pdd roda na ter" : ultimoDigito === "0" || ultimoDigito === "1" ? "n pdd roda na qua" : ultimoDigito === "0" || ultimoDigito === "1" ? "n pdd roda na qui" : ultimoDigito === "0" || ultimoDigito === "1" ? "n pdd roda na sex" : "CARACTER INVALIDO";




placa = leia.question("digite o ultimo digito da placa do seu veiculo: ")
var ultimoDigito = placa[placa.length - 1];

if(ultimoDigito === "0" ||ultimoDigito === "1") {
    console.log("vc nn pode rodar na segunda feira")
} else if(ultimoDigito === "2" || ultimoDigito === "3") {
    console.log("vc nn pode rodar na terca")
} else if(ultimoDigito === "4" || ultimoDigito === "5") {
    console.log("vc nn pode rodar na quarta")
} else if(ultimoDigito === "6" || ultimoDigito === "7") {
    console.log("vc nn pode rodar na quinta")
} else {
    console.log("vc nn pode rodar na sexta feira")
}






