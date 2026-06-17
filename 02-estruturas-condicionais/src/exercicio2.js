import leia from 'readline-sync'

var valorCompra = leia.questionFloat("DIGITE O VALOR TOTAL DA COMPRA: ")

var cliente = leia.keyInSelect(["Nao", "Sim"], "VOCE E CLIENTE VIP?")

if (cliente === 0) {
    console.log("O VALOR DA COMPRA SERA DE R$" + valorCompra)
} else if (cliente === 1 && valorCompra > 1000.00) {
    console.log("O VALOR FINAL SERA DE RS$" + (valorCompra - (valorCompra * 0.20)))
} else if (cliente === 1 && valorCompra > 500.00) {
    console.log("O VALOR FINAL SERA DE R$" + (valorCompra - (valorCompra * 0.10)))
} else {
    console.log("O VALOR FINAL SERA DE R$" + (valorCompra - (valorCompra * 0.05)))
}