import leia from 'readline-sync';
import { cadastrar } from './cadastrar.js';

var estoque = [];

do {

    console.log("=======CRUD Estoque=======");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produto");
    console.log("3 - Atualizar produto");
    console.log("4 - Excluir produto");
    console.log("5 - Sair");

    var escolhaDoUsuario = leia.questionInt("Digite o numero da opcao escolhida: ")

    switch (escolhaDoUsuario) {
        case 1:
        cadastrar(estoque);
            break;
        
        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        case 5:

            break;
    }

} while (escolhaDoUsuario !== 5);