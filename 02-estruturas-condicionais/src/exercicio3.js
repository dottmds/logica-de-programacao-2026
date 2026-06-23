import leia from 'readline-sync'

//  3) Você está desenvolvendo o sistema de cobrança de um estacionamento. Solicite ao
//  usuário a quantidade de horas que o veículo permaneceu estacionado e informe se ele
//  possui cartão fidelidade (S ou N). Até 1 hora: R$ 8,00, Acima de 1 até 3 horas: R$ 15,00 Acima
//  de 3 até 6 horas: R$ 22,00 Acima de 6 horas: R$ 30,00. Clientes que possuem cartão
//  fidelidade recebem 15% de desconto sobre o valor. Ao final, informe o valor total a ser pago.

var horasEstacionadas = leia.questionInt("HORAS ESTACIONADO: ");
var cartaoFidelidade = leia.keyInSelect(["Sim" , "Nao"] , "VOCE POSSUI CARTAO FIDELIDADE???")

var valor = 0
if(horas=== 1) {
    valor = 8.0
} else if(horas > 1 && horas <= 3) {
    valor = 15.0
} else if(horas > 3 && horas <= 6) {
    valor = 22.0
} else{
    valor = 30.0
}

var valorComDesconto = (cartaoFidelidade === 0) ? valor - (valor * 0.15) : valor
console.log("O VALOR DO ESTACIONAMENTO EH : R$" + valorComDesconto)