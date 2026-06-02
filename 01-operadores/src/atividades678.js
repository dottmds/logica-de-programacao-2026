import leia from 'readline-sync';

// var number = leia.questionInt("Digite um numero: ");

// var antecessor = number - 1;

// console.log("Numero antecessor eh:" + antecessor); 




// AQUI EH A ENTRADA DO CODIGO, CODIGO ESCRITO, PRIMEIRA ETAPA
//var pedirTemperatura = leia.questionFloat("Digite a temperatura atual em Celsius: ");

// AQUI EH O PROCESSAMENTO DO CODIGO, ETAPA 2
//var convCelsiusParaK = pedirTemperatura + 273.15

//var convCelsiusParaF = (pedirTemperatura * 1.8) + 32

// AQUI EH A SAIDA DO CODIGO, PARA APARECER NO CONSOLE, ULTIMA ETAPA
//console.log("A temperatura " + pedirTemperatura + " em Farehaint eh: " + convCelsiusParaF)
//console.log("A temperatura " + pedirTemperatura + " em Kelvin eh: " + convCelsiusParaK)





// QUESTAO 2 ::
//var larguraRet = leia.questionInt("Digite a largura do retangulo: ");
//var alturaRet = leia.questionInt("Digite a altura do retangulo: ");

//console.log("A area do retangulo eh: " + larguraRet * alturaRet)




// QUESTAO 3 ::
//var idade = leia.questionInt("Qual sua idade em dias?: ");
//var idadeAnos = leia.questionInt("Qual sua idade em anos?: ");
//var idadeMeses = leia.questionInt("Qual sua idade em meses?: ");

//var totalDias = (idadeAnos * 365) + (idadeMeses * 30) + idade

//console.log("Voce viveu um total de " + totalDias + " dias.");




// QUESTAO 4
//var totalEleitores = leia.questionInt("INFORME O TOTAL DE ELEITORES DA CIDADE: ");
//var totalBrancos = leia.questionInt("INFORME A QUANTIDADE DE VOTOS BRANCOS ");
//var totalNulos = leia.questionInt("INFORME A QUANTIDADE DE VOTOS NULOS: ");
//var totalValidos = leia.questionInt("INFORME A QUANTIDADE DE VALIDOS: ");

//var percentualBrancos = (totalBrancos / totalEleitores) * 100
//var percentualNulos = (totalNulos / totalEleitores) * 100
//var percentualValidos = (totalValidos / totalEleitores) * 100

//console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2))
//console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2))
//console.log("Percentual de votos validos: " + percentualBrancos.toFixed(2))





// QUESTAO 6
//var corrida1 = leia.questionFloat("corrida 1: ");
//var corrida2 = leia.questionFloat("corrida 2: ");
//var corrida3 = leia.questionFloat("corrida 3: ");
//var corrida4 = leia.questionFloat("corrida 4: ");
//var corrida5 = leia.questionFloat("corrida 5: ");

//var valorBruto = corrida1 + corrida2 + corrida3 + corrida4 + corrida5 
//var descontoApp = valorBruto * (25 / 100)
//var liquido = valor bruto - descontoApp

//console.log("o valor total arrecadado com os descontos eh de R$" + liquido.toFixed(2))





// QUESTAO 7
//var valorProduto = leia.questionFloat("Qual o valor do produto?: ");

//if(valorProduto < 20) {
//    var valorFinal = valorProduto + (valorProduto * (45 / 100));
//    console.log("Valor final do produto eh: " + valorFinal.toFixed(2));
//} else {
 // var valorFinal = valorProduto + (valorProduto * (30 / 100));
 // console.log("Valor final do produto eh: " + valorFinal.toFixed(2))
//}





// QUESTAO 8 
//var dur = leia.questionFloat("Digite um numero: ");
//console.log("o dobro do numero " + dur + " eh: " + (dur * 2));
//console.log("o triplo do numero " + dur + " eh: " + (dur * 3));







// QUESTAO 9
//var metros = leia.questionInt("Digite valor em metros: ");
//console.log("O valor em centimetros eh: " + metros * 100 + "cm.");
//console.log("O valor em milimetros eh: " + metros * 1000 + "mm.")





// QUESTA0 10
//var nota = leia.questionFloat("Digite a primeira nota: ");
//var nota2 = leia.questionFloat("Digite a segunda nota: ");
//var nota3 = leia.questionFloat("Digite a terceira nota: ");

//var media = (nota + nota2 + nota3) / 3;
//var resultado = media >= 7 ? "APROVADO" : "REPROVADO"

//console.log("A media do aluno eh: " + media.toFixed(2) + " e ele esta: " + resultado);





// QUESTAO 12
//var salario = leia.questionFloat("Digite o salario: ")
//var nome = leia.question("Digite seu nome: ")
//var novoSalario = salario + (salario * (15 / 100))

//console.log(nome + ", seu novo salário, com o aumento, é: " + novoSalario)





// QUESTAO 13
//var produto = leia.questionFloat("Digite o valor do produto: ")

//var novoValor = produto - (produto * (10 / 100))

//console.log("O valor do produto com desconto de 10% eh: " + novoValor.toFixed(2) + "R$.")






// QUESTAO 14
//var horas = leia.questionInt("Digite o horário atual: ");

//var minutos = horas * 60;
//var segundos = horas * 3600;

//console.log("O horário atual em MINUTOS é: " + minutos);
//console.log("O horário atual em SEGUNDOS É: " + segundos);





// QUESTAO 15 
var distanciaKm = leia.questionFloat("Digite a distancia percorrida em kilometros: ");
var litros = leia.questionFloat("Digite a quantidade de litros gastos: ");

console.log("O consumo médio em Km/l é: " + (distanciaKm / litros) + "Km/l");