import leia from 'readline-sync';
import { cadastrar } from './cadastrar.js';
import { listar } from './listar.js';
import { atualizar } from './atualizar.js';
import { excluir } from './excluir.js';

var estoque = [];

do {

    console.log("=======CRUD Estoque=======");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produto");
    console.log("3 - Atualizar produto");
    console.log("4 - Excluir produto");
    console.log("5 - Sair");

    var escolhaDoUsuario = leia.questionInt("Digite o numero da opcao escolhida: ");

    switch (escolhaDoUsuario) {
        case 1:
            cadastrar(estoque);
            break;
        case 2:
            listar(estoque);
            break;
        case 3:
            atualizar(estoque);
            break;
        case 4:
            excluir(estoque);
            break;
        case 5:
            console.log("Programa encerrado.")
            break;
    }

} while (escolhaDoUsuario !== 5);