// 1) Crie um vetor com 20 objetos representando assentos de uma sala de cinema. Cada
// assento deverá possuir: - número, ocupado, tipo. O tipo poderá ser "normal" ou
// "preferencial". O programa deverá apresentar um menu:
//  1 - Mostrar assentos
//  2 - Reservar assento
//  3 - Cancelar reserva
//  4 - Mostrar quantidade de assentos livres
//  5 - Mostrar quantidade de assentos ocupados
//  0 - Encerrar
// Sempre que o usuário solicitar uma reserva ou cancelamento, o programa deverá percorrer
// o vetor procurando o assento informado. Ao final, também informe a porcentagem de
// ocupação da sala.

import leia from 'readline-sync';

var cinema = [];

for (var i = 0; i < 20; i++) {

    var cadeira = {
        numero: (i < 10) ? "A"(i + 1) : "B" + (i - 9),
        ocupado: false,
        tipo: (i < 5) ? "Preferencial" : "Normal"
    }

    cinema.push(cadeira);
}

function mostrarCinema() {

    console.log("====CADEIRAS====");
    cinema.forEach((cadeira) => {
        var situacao = cadeira.ocupado === true ? "OCUPADO" : "LIVRE";

        console.log(`Assentos - ${cadeira.numero} | ${cadeira.tipo} | ${situacao}`)
    })

}

function reservarCadeira() {
    var reserva = leia.question("informe o assento: [A1-10 - B1-10]   ")
    var encontrou = false;
    cinema.forEach((cadeira => {
        if (cadeira.numero === reserva) {
            encontrou = true;
            if (cadeira.ocupado === true) {
                console.log("cadeira ocupada");
            } else {
                cadeira.ocupado = true;
                console.log("cadeira reservada");
            }

            return;
        }
    }))

    if (encontrou === false) {
        console.log("CADEIRA INFORMADA NAO EXISTENTE")
    }

}

function cancelarCadeira() {
    var reserva = leia.question("informe a cadeira: [A1-10 - B1-10]   ")
    var encontrou = false;
    cinema.forEach((cadeira) => {
       
        if(cadeira.numero === false) {
            cadeira.ocupado = true;
            console.log("cadeira reservada");
        } else {
            console.log("cadeira ja ocupada");
        }

    })

}



function mostrarAssentosOcupados() {
    
}


var opcao;
do {

    console.log("n=====CINEMA=====");
    console.log("1 - MOSTRAR ASSENTOS");
    console.log("2 - RESERVAR ASSENTOS");
    console.log("3 - CANCELAR ASSENTOS");
    console.log("4 - MOSTRAR ASSENTOS LIVRES");
    console.log("5 - MOSTRAR QUANTIDADE OCUPADOS");
    console.log("0 - SAIR");

    opcao = leia.questionInt("INFORME UMA OPCAO: ");

    if (opcao === 1) {
        mostrarCinema();
    } else if (opcao === 2) {
        reservarCadeira();
    } else if (opcao === 3) {
        cancelarCadeira();
    } else if (opcao === 4) {

    } else if (opcao === 5) {

    } else {
        console.log("toin nhoin nhoin nhoin nhoin");
    }

} while (opcao !== 0);

console.log("=====SISTEMA ENCERRADO=====");