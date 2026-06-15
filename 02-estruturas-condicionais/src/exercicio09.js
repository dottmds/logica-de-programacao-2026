import leia from 'readline-sync'

var m = leia.question("Digite um numero de 1 a 12: ")

if(m === '1'){
    console.log("O mes de Janeiro possui 31 dias")
} else if(m === '2'){
    console.log("O mes de Fevereiro possui 28/29 dias")
} else if(m === '3'){
    console.log("O mes de Marco possui 31 dias")
} else if(m === '4'){
    console.log("O mes de Abril possui 30 dias")
} else if(m === '5'){
    console.log("O mes de Maio possui 31 dias")
} else if(m === '6'){
    console.log("O mes de Junho possui 30 dias")
} else if(m === "7"){
    console.log("O mes de Julho possui 31 dias")
} else if(m === "8"){
    console.log("O mes de Agosto possui 30 dias")
} else if(m === "9"){
    console.log("O mes de Setembro possui 31 dias")
} else if(m === "10"){
    console.log("O mes de Outubro possui 30 dias")
} else if(m === "11"){
    console.log("O mes de Novembro possui 31 dias")
} else if(m === "12"){
    console.log("O mes de Dezembro possui 30 dias")
} else{
    console.log("NUMERO DE MES INVALIDO OU CARACTER INVALIDO")
}