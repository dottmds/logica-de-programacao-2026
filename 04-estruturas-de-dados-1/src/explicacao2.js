import leia from 'readline-sync'

// DECLARAÇÃO DE VETORES
var listaAlunos = ["Mariazinha", "Joãozinho"];
var notas = [7, 8.8];

// ACESSANDO POCIÇÃO ESPECÍFICA DO ARRAY
var index = 0
var soma = notas[index] + notas[1];


listaAlunos[0] = "Joaninha"

// ADICIONAR ITENS NA LISTA 

// INICIO
listaAlunos.unshift("Carlinho")
// FINAL
listaAlunos.push("Pedrinho")

// REMOVER ITENS DA LISTA

// PRIMEIRO 
listaAlunos.shift()

// ULTÍMO
listaAlunos.pop()

// TAMANHO DA LISTA 
listaAlunos.length

// PEGAR ULTIMO ITEM DA LISTA
listaAlunos[listaAlunos.length - 1]

// PEGAR PRIMEIRO ITEM DA LISTA
listaAlunos[0]

// ADICIONAR NOVOS ITENS
listaAlunos.push("Marcinha")
listaAlunos.push("Dieguinho")
listaAlunos.push("Danielzinho")

// PERCORRER LISTA/ARRAY/VETOR

for (var contador = 0; contador < listaAlunos.length; contador++) {
    //console.log("ITEM " + contador)
    //console.log(listaAlunos[contador]);

}

// melhoria do for; percorre o vetor da primeira posicao ate a ultima
listaAlunos.forEach(item => {
    //console.log(item)
})


var matriz = [
    ["Douglas", 16, "1.65"],
    ["Karen", 13, "1.57"],
    ["Jhulya", 16, "1.64"]
]

// linha 1 coluna 1: 13;  chamada: matriz[1][1]


var tab = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

tab[1][1] = "O"

function desenharJogo() {
    for (var i = 0; i < tab; i++) {
        console.log(" " + tab[1][0] + " | " + tab[i][1] + " | " + tab[i][2])

        if (i < 2) {
            console.log("---------------")
        }
    }
    console.clear()
}

function pedirLance() {
    var linha = leia.questionInt("INFORME A LINHA");
    var coluna = leia.questionInt("DIGITE A COLUNA");
    tab[linha][coluna] = index % 2 === 0 ? "X" : "O"

}

for (var i = 0; i < 9; 1++) {
    pedirLance(i);
    desenharJogo();
}