var listaNomes = ["Douglas", "Jair", "Messias", "Bolsonaro"]

console.log(listaNomes);
console.log(listaNomes[1])
console.log(listaNomes[2])

// ADICIONA EM POSIÇÃO ESPECÍFICA
var cont = 3;
listaNomes[cont] = "Carlinh"
console.log(listaNomes[4])

// ADICIONA NO FINAL DA LISTA
listaNomes.push("Thiaguinh")
console.log(listaNomes[4])

// SUBSTITUI NA POSIÇÃO 1
listaNomes[1] = "Lucas"


// ADICIONAR ALGO NO INICIO DA LISTA (0)
listaNomes.unshift("Daniel")


// REMOVER O ULTIMO ITEM DA LISTA
listaNomes.pop()

// REMOVER PRIMEIRA POSIÇÃO
listaNomes.shift()

// PULA 5 ITENS DA LISTA(nao faz pq da erro)
listaNomes[10] = "Nome Teste"

// PARA SABER A QUANTIDADE DE ITENS DA LISTA/VETOR: .length
console.log(listaNomes)

// PARA SABER O ULTIMO ITEM DA LISTA
console.log(listaNomes[listaNomes.length - 1])

// PRA SABER O PRIMEIRO ITEM DA LISTA (bem obvio) SEMPRE SERA O 0
console.log(listaNomes[0])

// PERCORRER UMA LISTA
for(var contador = 0; contador < listaNomes.length; contador++) {
    listaNomes[contador] = 'NADA'
}
console.log(listaNomes)

// ESPECÍFICO PARA LISTAS
listaNomes.forEach((item, index) => {
    listaNomes[index] = "NADA 2"
})
console.log(listaNomes)

// cada item de uma lista vai ter um index ( numero )

var matrixAlunos = [
    ["Pedrinh", 9.8],
    ["Carlinh", 7.8]
    ["Robertinh", 8.2]
    ["Joaninha", 7.8]
    ["Igorzinh", 5.8]
    ["Belinh", 7.8]
]

var matrizJogoDaVelha = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

matrizJogoDaVelha[1][1] = "X"
console.table(matrizJogoDaVelha)