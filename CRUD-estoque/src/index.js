import leia from 'readline-sync';
import { cadastrar } from './cadastrar.js';
import { listarProdutos } from './listar.js';
import { atualizarProduto } from './atualizar.js';
import { deletarProduto } from './excluir.js';
import { estoque } from './estoq.js';

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
            listarProdutos(estoque);
            break;
        case 3:
            atualizarProduto(estoque);
            break;
        case 4:
            deletarProduto(estoque);
            break;
        case 5:
            console.log("Programa encerrado.")
            break;
    }

} while (escolhaDoUsuario !== 5);