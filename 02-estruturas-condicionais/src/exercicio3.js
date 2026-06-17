import leia from 'readline-sync'

//  3) Você está desenvolvendo o sistema de cobrança de um estacionamento. Solicite ao
//  usuário a quantidade de horas que o veículo permaneceu estacionado e informe se ele
//  possui cartão fidelidade (S ou N). Até 1 hora: R$ 8,00, Acima de 1 até 3 horas: R$ 15,00 Acima
//  de 3 até 6 horas: R$ 22,00 Acima de 6 horas: R$ 30,00. Clientes que possuem cartão
//  fidelidade recebem 15% de desconto sobre o valor. Ao final, informe o valor total a ser pago.

var horasEstacionadas = leia.questionInt("HORAS ESTACIONADO: ");
var cartaoFidelidade = leia.keyInSelect(["Sim" , "Nao"] , "VOCE POSSUI CARTAO FIDELIDADE???")

if(cartaoFidelidade === 1) {
    
}